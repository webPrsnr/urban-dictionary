import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api/api";
import LetterList from "../../components/LetterList/LetterList";
import Pagination from "../../components/Pagination/Pagination";
import setPagination from "../../utils/setPagination";
import styles from "./Alphabet.module.scss";

const Alphabet = () => {
  const { alphabet } = useParams();
  const [words, setWords] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = event.selected * 12;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [alphabet]);

  useEffect(() => {
    async function fetchData() {
      const data = await API.get(
        `words?alphabet=${alphabet.toLowerCase()}&_offset=${itemOffset}`,
        { headerInfo: true }
      );
      setPagination(setWords, setPageCount, data);
    }
    fetchData();
  }, [itemOffset, alphabet]);

  return (
    <div className={styles.wrapper_outer}>
      <div className={styles.wrapper_inner}>
        <h1 className={styles.letters_block}>
          Все слова на букву <span>{alphabet}</span>
        </h1>
        {words.length ? (
          <LetterList letters={words} />
        ) : (
          <h2 className={styles.letters_empty}>Слов нету</h2>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export default Alphabet;
