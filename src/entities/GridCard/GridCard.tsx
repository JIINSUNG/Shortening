import React from "react";
import styles from "./GridCard.module.css";

type GridProps = {
  Logo: string;
  title: string;
  content: string;
};

const GridCard = ({ Logo, title, content }: GridProps) => {
  return (
    <div className={styles.card}>
      <img src={Logo} alt="Logo" width={100} height={100} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default GridCard;
