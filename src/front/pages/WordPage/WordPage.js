import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api/api";
import Word from "../../components/Word/Word";

const WordPage = () => {
  const { id } = useParams();
  const [word, setWord] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const data = await API.get(`words/${id}`);
      setWord(data.records);
    })();
  }, []);

  return (
    <>
      {word.map((item, i) => (
        <Word item={item} key={i} />
      ))}
    </>
  );
};

export default WordPage;
