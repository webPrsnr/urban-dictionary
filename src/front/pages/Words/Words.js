import React, { useEffect, useState } from "react";
import LetterList from "../../components/LetterList/LetterList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Words.module.scss";

const Words = () => {
  const [words, setWords] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = event.selected * 12;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/api/v1/words/?_offset=${itemOffset}`
      );
      const json = await response.json();
      setWords(json.data);

      setPageCount(Math.ceil(response.headers.get("x-content") / 12));
    })();
  }, [itemOffset]);

  return (
    <div className={styles.wrapper_outer}>
      <div className={styles.wrapper_inner}>
        <h1 className={styles.letters_block}>Все слова</h1>
        <LetterList letters={words} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Words;
