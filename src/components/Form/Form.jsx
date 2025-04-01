import Timer from "../Timer/Timer";

const Form = () => {
  return (
    <div>
      <h2>Реєструйся просто зараз</h2>
      <Timer />
      <form className="form">
        <label>
          <input
            type="text"
            name="name"
            required
            placeholder="Введи своє ім’я"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder="Введи свій E-mail"
          />
        </label>
        <label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+380 95 -- -- ---"
          />
        </label>
        <label>
          <input type="checkbox" required /> Я згоден з{" "}
          <a href="#">Політикою конфіденційності</a> та <a href="#">Умовами</a>
        </label>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};
export default Form;
