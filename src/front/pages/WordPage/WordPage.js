import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api/api";
import Word from "../../components/Word/Word";

const WordPage = () => {
  const { id } = useParams();
  const [word, setWord] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      // const response = await fetch(`words/${id}`);
      // const data = await response.json();
      const data = await API.get(`words/${id}`);
      // console.log(data);
      setWord(data);
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
