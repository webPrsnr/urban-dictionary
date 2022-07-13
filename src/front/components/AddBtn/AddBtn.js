import { useState, memo } from "react";
import AddWord from "../AddWord/AddWord";
import Modal from "../Modal/Modal";
import styles from "./AddBtn.module.scss";

const AddBtn = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const modalSwitch = (flag) => {
    setModalFlag(flag);
  };
  return (
    <>
      <div className={styles.button} onClick={() => modalSwitch(true)}>
        Добавить
      </div>
      <Modal modalFlag={modalFlag} setModalFlag={setModalFlag}>
        <AddWord />
      </Modal>
    </>
  );
};

export default memo(AddBtn);
