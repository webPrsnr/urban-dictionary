import { useDispatch } from "react-redux";
import { toggleNoticeStatus } from "../../store/noticeSlice";
import styles from "./Alert.module.scss";

const Alert = ({ message }) => {
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(toggleNoticeStatus());
  };
  return (
    <div className={styles.alert}>
      <p>{message}</p>
      <a className={styles.close} onClick={exit}>
        &times;
      </a>
    </div>
  );
};

export default Alert;
