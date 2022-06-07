import styles from "./Letter.module.scss";
import { Link } from "react-router-dom";

const Letter = ({ letter, id }) => {
  return (
    <Link to={`/words/${id}`} className={styles.letter_link}>
      <p className={styles.letter_paragraph}>{letter}</p>
    </Link>
  );
};

export default Letter;
