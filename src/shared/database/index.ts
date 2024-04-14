import { ResultSetHeader, RowDataPacket, createPool } from "mysql2";

const connect = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  connectionLimit: 2,
  waitForConnections: true,
  queueLimit: 0,
});

connect.getConnection((err, conn) => {
  if (err) console.log("db 연결중 오류 발생");
  else console.log("db 연결");
  conn.release();
});

const executeQuery = async <T>(
  query: string,
  arrParams: T[]
): Promise<RowDataPacket[]> => {
  return new Promise((resolve, reject) => {
    try {
      connect.query(query, arrParams, (err, data: RowDataPacket[]) => {
        if (err) {
          console.log("Error in executing the query");
          reject(err);
        }

        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const executeUpdate = async <T>(
  query: string,
  arrParams: T[]
): Promise<ResultSetHeader> => {
  return new Promise((resolve, reject) => {
    try {
      connect.query(query, arrParams, (err, data: ResultSetHeader) => {
        if (err) {
          console.log("Error in executing the query");
          reject(err);
        }

        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export { executeQuery, executeUpdate };
