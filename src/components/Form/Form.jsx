import { useState } from "react";
import Timer from "../Timer/Timer";
import s from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Ви повинні погодитися з умовами!");
      return;
    }

    try {
      const response = await fetch("https://example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      if (response.ok) {
        alert("Ваша реєстрація успішно надіслана!");
      } else {
        alert("Сталася помилка при реєстрації.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Помилка з’єднання. Спробуйте ще раз.");
    }
  };

  return (
    <div>
      <h2 className={s.titleForm}>Реєструйся просто зараз</h2>
      <Timer />
      <form onSubmit={handleSubmit} className={s.formContInput}>
        <div className={s.formInput}>
          <label>
            <input
              type="text"
              name="name"
              required
              placeholder="Введи своє ім’я"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              required
              placeholder="Введи свій E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className={s.inputTel}>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+380 95 -- -- ---"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className={s.formCheck}>
          <input
            type="checkbox"
            name="agree"
            required
            checked={formData.agree}
            onChange={handleChange}
          />{" "}
          Я згоден з <a href="#">Політика конфіденційності</a> та{" "}
          <a href="#">Умови користування послугами</a>
        </label>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};
export default Form;
