declare namespace NodeJS {
  interface ProcessEnv {
    readonly DB_HOST: string;
    readonly DB_USER: string;
    readonly DB_PASSWORD: string;
    readonly DB_DATABASE: string;
    readonly DB_PORT: number;
  }
}
