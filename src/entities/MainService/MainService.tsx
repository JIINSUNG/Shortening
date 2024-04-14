import React, { useEffect, useState } from "react";
import styles from "./MainService.module.css";
const MainService = () => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    setOriginalUrl("");
    setShortenedUrl("");
  }, [trigger]);

  const buttonHandler = async () => {
    if (originalUrl === "") {
      alert("URL을 입력해 주세요");
      return;
    }

    await fetch(`/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        original_url: originalUrl
          .replace("https://", "")
          .replace("http://", ""),
      }),
    })
      .then((response) => response.json())
      .then((body) => {
        setShortenedUrl(body.data.short_url);
      })
      .catch((err) => console.log(err));
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href + shortenedUrl)
      .then(() => {
        alert("URL이 복사되었습니다.");
      })
      .catch((err) => {
        console.error("URL을 복사하는 동안 오류가 발생했습니다:", err);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <label>
          <h2 className={styles.h2}>url을 입력하고 줄이기 버튼을 눌러주세요</h2>{" "}
        </label>
        <div className={styles.area}>
          <input
            type="text"
            title="url"
            onChange={(e) => setOriginalUrl(e.target.value)}
            value={originalUrl}
            placeholder="Url을 입력해주세요"
            className={styles.input}
          />
          <button
            onClick={() => buttonHandler()}
            type="button"
            className={styles.button}
          >
            줄이기
          </button>
        </div>
        {shortenedUrl ? (
          <div>
            <p>
              생성된 URL: {window.location.href}
              {shortenedUrl}
            </p>
            <div className={styles.helper}>
              <button
                type="button"
                onClick={() => {
                  setTrigger((prev) => !prev);
                }}
                className={styles.button}
              >
                다시 만들기
              </button>
              <button
                type="button"
                onClick={() => {
                  handleCopy();
                }}
                className={styles.button}
              >
                URL 복사
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>
              입력창에 URL을 입력하신 후 줄이기 버튼을 눌러주세요, 변환이
              완료되면 변환된 URL이 표시됩니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainService;
