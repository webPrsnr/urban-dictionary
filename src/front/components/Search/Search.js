import { useEffect, useState, memo } from "react";
import { API } from "../../api/api";
import styles from "./Search.module.scss";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [allWords, setWords] = useState([]);
  const debounceSearchWord = useDebounce(inputText, 500);

  const inputHandler = (e) => {
    const lowerWord = e.target.value.toLowerCase();
    setInputText(lowerWord);
  };

  useEffect(() => {
    async function fetchDebounceData() {
      if (debounceSearchWord) {
        const data = await API.get(`words?search=${debounceSearchWord}`);
        setWords(data);
      }
    }
    fetchDebounceData();
  }, [debounceSearchWord]);

  return (
    <div className={styles.find}>
      <h2 className={styles.find__title}>Давай найдем...</h2>
      <div className={styles.form}>
        <input
          onChange={inputHandler}
          className={styles.search_form}
          type="text"
          placeholder="Введи слово..."
        />
        {/* <div className={styles.search_button}>Найти слово</div> */}
      </div>
      <div className={styles.find__result}>
        {!inputText ? (
          <p>Введите свое слово</p>
        ) : (
          allWords.map((el) => (
            <div key={el.id} className={styles.result__el}>
              <Link to={`/words/${el.id}`}>
                <span>{el.word_name}</span> {el.mean}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default memo(Search);
