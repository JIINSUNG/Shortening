import { GridCard, guideData } from "@/entities";
import styles from "./Introduce.module.css";

const Introduce = () => {
  return (
    <div className={styles.introduce}>
      <h1>심플 URL 단축기 쇼트닝</h1>
      <div className={styles.gridContainer}>
        {guideData.map((item) => (
          <GridCard
            key={item.idx}
            Logo={item.Logo}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Introduce;
