import styles from "./Modal.module.scss";

const Modal = ({ modalFlag, setModalFlag, children }) => {
  console.log(modalFlag);
  return (
    <div
      className={modalFlag ? styles.modal + " " + styles.active : styles.modal}
      onClick={() => setModalFlag(false)}
    >
      <div
        className={styles.modal__wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
