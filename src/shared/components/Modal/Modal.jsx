import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, closeModal }) => {
  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleCloseModal);
      document.body.style.overflow = "unset";
    };
  }, [handleCloseModal]);

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseModal}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
