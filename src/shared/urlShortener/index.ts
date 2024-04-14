const shortenUrl = async (originalUrl: string) => {
  let shortenUrl = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    shortenUrl += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  return shortenUrl;
};

export default shortenUrl;
