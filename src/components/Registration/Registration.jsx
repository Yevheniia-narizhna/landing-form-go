import Form from "../Form/Form";
import s from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={s.formCont}>
      <div class="content">
        <Form />
      </div>
      {/* <div class="preview">
        <p>Частина контенту...</p>
        <button class="open-modal">Зареєструватися</button>
      </div> */}

      {/* <div class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="content">Вміст модального вікна</div>
        </div>
      </div> */}
    </div>
  );
};
export default Registration;
