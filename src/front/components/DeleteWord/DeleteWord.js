import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import styles from "./DeleteWord.module.scss";
import { useDispatch } from "react-redux";
import { changeNotice } from "../../store/noticeSlice";

const DeleteWord = ({ name, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteWordById = async () => {
    const data = await API.delete(`words/${id}`);
    if (data.status == "OK") {
      dispatch(changeNotice(`Вы удалили слово: ${name}`));
      navigate("/words");
    }
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
