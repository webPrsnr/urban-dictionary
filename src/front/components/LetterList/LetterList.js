import Letter from "../Letter/Letter";
import styles from "./LetterList.module.scss";
const LetterList = ({ letters }) => {
  return (
    <div className={styles.letter_list}>
      {letters.map((letter) => (
        <Letter key={letter.id} letter={letter.word_name} id={letter.id} />
      ))}
    </div>
  );
};

export default LetterList;
