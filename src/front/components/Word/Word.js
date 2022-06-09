import styles from "./Word.module.scss";
import Modal from "../Modal/Modal";
import DeleteWord from "../DeleteWord/DeleteWord";
import { useState } from "react";

const Word = ({ item }) => {
  const transformToDate = (str) => {
    return str.split(",")[0];
  };

  const [modalFlag, setModalFlag] = useState(false);

  const modalDeleteWord = () => {
    setModalFlag(true);
  };

  return (
    <div className={styles.word__outter}>
      <div className={styles.word__inner}>
        <div className={styles.word__wrapper}>
          <div className={styles.word__head}>
            <time title={"updated at"} className={styles.word__head_updated}>
              {transformToDate(item.created_at)}
            </time>
            <span className={styles.word__head_delete}></span>
            <span
              className={styles.word__head_config}
              onClick={modalDeleteWord}
            ></span>
            <time title={"created at"} className={styles.word__head_created}>
              {transformToDate(item.updated_at)}
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
      <Modal modalFlag={modalFlag} setModalFlag={setModalFlag}>
        <DeleteWord name={item.word_name} id={item.id} />
      </Modal>
    </div>
  );
};

export default Word;
