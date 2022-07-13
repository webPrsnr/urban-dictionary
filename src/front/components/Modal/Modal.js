import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalElement = document.querySelector("#modal");

const Modal = ({ modalFlag, setModalFlag, children }) => {
  const element = useMemo(() => {
    const element = document.createElement("div");
    return element;
  }, []);

  useEffect(() => {
    if (modalFlag) {
      modalElement.appendChild(element);

      return () => {
        modalElement.removeChild(element);
      };
    }
  });

  return createPortal(
    <div
      className={styles.modal + " " + styles.active}
      onClick={() => setModalFlag(false)}
    >
      <div
        className={styles.modal__wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    element
  );
};

export default Modal;
