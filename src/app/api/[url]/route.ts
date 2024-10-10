import { executeQuery, executeUpdate, shortenUrl } from "@/shared";
import { NextRequest, NextResponse } from "next/server";

// params를 가져오기 위해선, 무조건 첫번째 자리엔 request를 넣어줘야함
export async function GET(
  request: NextRequest,
  { params }: { params: { url: string } }
) {
  // prepared statement 전략
  const sql = `SELECT original_url FROM URL_TABLE WHERE short_url = ?`;

  const result = await executeQuery(sql, [params.url]);
  let url = result[0].original_url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  return NextResponse.redirect(new URL(url));
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // original_url을 줄인다음, DB에 반영 후 shorten url을 반환하는 로직
  const short_url = await shortenUrl(body.original_url);

  if (!short_url) {
    return NextResponse.json(
      { message: "다시한번 시도해 주세요" },
      {
        status: 400,
      }
    );
  }

  const sql = `INSERT INTO URL_TABLE (short_url, original_url) VALUES (?, ?)`;
  const result = await executeUpdate(sql, [short_url, body.original_url]);
  if (result.affectedRows === 1) {
    return NextResponse.json({
      message: "변환이 성공적으로 완료되었습니다",
      data: { short_url: short_url, original_url: body.original_url },
    });
  }

  return NextResponse.json(
    { message: "다시한번 시도해 주세요" },
    {
      status: 400,
    }
  );
}
