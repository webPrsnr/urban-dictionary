import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import LetterList from "../../components/LetterList/LetterList";
import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import styles from "./Words.module.scss";
import Alert from "../../components/Alert/Alert";
import AddBtn from "../../components/AddBtn/AddBtn";
import { useSelector } from "react-redux";
import setPagination from "../../utils/setPagination";

const Words = () => {
  const [words, setWords] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortFlag, setSortFlag] = useState("alphab_inc");
  const noticeFlag = useSelector((state) => state.notice);
  const handlePageClick = (event) => {
    const newOffset = event.selected * 12;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    (async function fetchData() {
      const data = await API.get(
        `words?sort=${sortFlag}&_offset=${itemOffset}`
      );
      setPagination(setWords, setPageCount, data);
    })();
  }, [itemOffset, sortFlag]);

  return (
    <>
      {noticeFlag.status ? <Alert message={noticeFlag.message} /> : ""}
      <div className={styles.wrapper_outer}>
        <div className={styles.wrapper_inner}>
          <Search />
          <div className={styles.head_container}>
            <h1 className={styles.letters_block}>Все слова</h1>
            <AddBtn />
            <Sort setSortFlag={setSortFlag} />
          </div>
          <LetterList letters={words} />
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </>
  );
};

export default Words;
