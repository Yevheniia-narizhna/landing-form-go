import { useEffect, useState } from "react";

const Timer = () => {
  // Цільова дата
  const targetDate = new Date("April 4, 2025 00:00:00").getTime();

  // Стан для відображення часу
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Оновлення часу кожну секунду
    const interval = setInterval(() => {
      // Поточний час
      const now = new Date().getTime();

      // Відстань між поточним часом та цільовою датою
      const distance = targetDate - now;

      // Обчислення днів, годин, хвилин і секунд
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Оновлення стану
      setTime({ days, hours, minutes, seconds });

      // Якщо час вичерпано, зупиняємо таймер
      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Очищення інтервалу, коли компонент буде видалений
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <p>Зворотний відлік до 04.04.2025:</p>
      <div id="timer">
        {time.days} днів {time.hours} годин {time.minutes} хвилин {time.seconds}{" "}
        секунд
      </div>
    </div>
  );
};

export default Timer;
