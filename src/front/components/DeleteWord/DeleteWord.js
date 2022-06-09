import { Link, useNavigate } from "react-router-dom";
import styles from "./DeleteWord.module.scss";

const DeleteWord = ({ name, id }) => {
  const navigate = useNavigate();
  const deleteWordById = () => {
    fetch(`http://localhost:8080/api/v1/words/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          // TODO: <Link> with state to show notification
          navigate(-1);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.delete}>
      <div className={styles.delete__head}>info</div>
      <div className={styles.delete__info}>
        <p className={styles.delete__descr}>
          Вы действительно хотите удалить слово:'<span>{name}</span>'?
        </p>
        <button className={styles.delete__btn} onClick={deleteWordById}>
          Да
        </button>
      </div>
    </div>
  );
};

export default DeleteWord;