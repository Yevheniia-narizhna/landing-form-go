import { useState } from "react";
import Form from "../Form/Form";
import Timer from "../Timer/Timer";
import s from "./Registration.module.css";
import { createPortal } from "react-dom";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={s.formCont}>
        <div className={s.formF}>
          <Form />
        </div>
      </div>
      <div className={s.preview}>
        <h2>Реєструйся просто зараз</h2>
        <Timer />
        <button onClick={() => setIsModalOpen(true)} className={s.openModal}>
          Зареєструватися
        </button>
      </div>
      {isModalOpen &&
        createPortal(
          <div className={s.modal}>
            <div className={s.modalContent}>
              <div className={s.logoClose}>
                <img src="/logo.png" alt="logo"></img>
                <img
                  src="/Icon.png"
                  alt="close"
                  onClick={() => setIsModalOpen(false)}
                  className={s.close}
                ></img>
              </div>

              <div className={s.content}>
                <Form />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
export default Registration;
