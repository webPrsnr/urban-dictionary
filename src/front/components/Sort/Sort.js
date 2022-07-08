import { useState, memo } from "react";
import styles from "./Sort.module.scss";

const Sort = ({ setSortFlag }) => {
  const [sortPop, setSortPop] = useState(false);
  const [sortTitle, setSortTitle] = useState("алфавиту (INC)");

  const showPopup = () => {
    setSortPop(!sortPop);
  };

  const list = [
    { title: "алфавиту (INC)", req: "alphab_inc" },
    { title: "алфавиту (DEC)", req: "alphab_dec" },
    { title: "дате (NEW)", req: "date_new" },
    { title: "дате (OLD)", req: "date_old" },
  ];

  const changeFlag = (item) => {
    setSortFlag(item.req);
    setSortTitle(item.title);
    showPopup();
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <p>Сортировка по:</p>
        <span className={styles.sort__by} onClick={showPopup}>
          {sortTitle}
        </span>
      </div>
      {sortPop && (
        <>
          <Backdrop setPop={showPopup} />
          <div className={styles.sort__popup}>
            <ul className={styles.sort__list}>
              {list.map((item, index) => (
                <li key={index} onClick={() => changeFlag(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

const Backdrop = ({ setPop }) => {
  return <div className={styles.backdrop} onClick={setPop}></div>;
};

export default memo(Sort);
