import Registration from "../Registration/Registration";
import s from "./Section.module.css";

const Section = () => {
  return (
    <div className={s.section}>
      <img src="/logo.png" alt="logo"></img>
      <div className={s.sectionCont}>
        <h4 className={s.sectionBorder}>
          Безоплатний <span>вебінар</span>
        </h4>
        <h4 className={s.sectionBorder}>
          Старт: <span className={s.span}>10 січня 19:30</span>
        </h4>
      </div>
      <h1 className={s.sectionTitle}>
        Навчіться створювати Excel-таблиці на pro-рівні
      </h1>
      <p className={s.sectionInfo}>
        Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу та
        створюйте таблиці швидко <br /> і в задоволення
      </p>
      <div className={s.registrSection}>
        <Registration />
      </div>
    </div>
  );
};
export default Section;
