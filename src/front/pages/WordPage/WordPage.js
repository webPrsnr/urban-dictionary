import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../../components/Word/Word";

const WordPage = () => {
  const { id } = useParams();
  const [word, setWord] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`http://localhost:8080/api/v1/words/${id}`);
      const data = await response.json();
      setWord(data.data);
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
