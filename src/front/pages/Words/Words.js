import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import LetterList from "../../components/LetterList/LetterList";
import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort/Sort";
import styles from "./Words.module.scss";

const Words = () => {
  const [words, setWords] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortFlag, setSortFlag] = useState("alphab_inc");

  const handlePageClick = (event) => {
    const newOffset = event.selected * 12;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    (async function fetchData() {
      const data = await API.get(
        `words?sort=${sortFlag}&_offset=${itemOffset}`,
        { headerInfo: true }
      );
      setWords(data.records);
      setPageCount(Math.ceil(data.recordsLength / 12));
    })();
  }, [itemOffset, sortFlag]);

  return (
    <div className={styles.wrapper_outer}>
      <div className={styles.wrapper_inner}>
        <div className={styles.head_container}>
          <h1 className={styles.letters_block}>Все слова</h1>
          <Sort setSortFlag={setSortFlag} />
        </div>
        <LetterList letters={words} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Words;
