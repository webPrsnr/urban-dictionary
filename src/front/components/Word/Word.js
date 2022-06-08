import styles from "./Word.module.scss";

const Word = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.word__outter}>
      <div className={styles.word__inner}>
        <div className={styles.word__wrapper}>
          <div className={styles.word__head}>
            <time title={"updated at"} className={styles.word__head_updated}>
              19.02.2020
            </time>
            <time title={"created at"} className={styles.word__head_created}>
              20.02.2020
            </time>
          </div>
          <div className={styles.word__meaning}>
            <div className={styles.word__name}>
              <span>{item.word_name}</span>
            </div>
            <p>{item.mean}</p>
          </div>
          <div>
            <div className={styles.word__head}>
              <h2>Описание</h2>
            </div>
            <div className={styles.word__descr}>{item.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word;
