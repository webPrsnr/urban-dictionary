import { useState, memo } from "react";
import AddWord from "../AddWord/AddWord";
import Modal from "../Modal/Modal";
import styles from "./AddBtn.module.scss";

const AddBtn = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const modalSwitch = () => {
    setModalFlag(!modalFlag);
  };
  return (
    <>
      <div className={styles.button} onClick={modalSwitch}>
        Добавить
      </div>
      {modalFlag && (
        <Modal modalFlag={modalFlag} setModalFlag={setModalFlag}>
          <AddWord />
        </Modal>
      )}
    </>
  );
};

export default memo(AddBtn);
