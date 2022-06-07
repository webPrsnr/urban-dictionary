import styles from "./LetterList.module.scss";
const LetterList = ({ letters }) => {
  return (
    <div className={styles.letter_list}>
      {letters.map((letter) => (
        <p key={letter.id}>{letter.word_name}</p>
      ))}
    </div>
  );
};

export default LetterList;
