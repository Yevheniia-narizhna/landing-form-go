import { useEffect, useState } from "react";
import s from "./Timer.module.css";

const Timer = () => {
  const targetDate = new Date("April 4, 2025 00:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (timeValue) => {
    return String(timeValue).padStart(2, "0");
  };

  return (
    <div className={s.timerSection}>
      <div className={s.timerCont}>
        <div className={s.timeBox}>
          <span className={s.timeValue}>{formatTime(time.days)}</span>
          <span className={s.timeLabel}>днів</span>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.timeBox}>
          <span className={s.timeValue}>{formatTime(time.hours)}</span>
          <span className={s.timeLabel}>годин</span>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.timeBox}>
          <span className={s.timeValue}>{formatTime(time.minutes)}</span>
          <span className={s.timeLabel}>хвилин</span>
        </div>
        <span className={s.dots}>:</span>
        <div className={s.timeBox}>
          <span className={`${s.timeValue} ${s.colorSecond}`}>
            {formatTime(time.seconds)}
          </span>
          <span className={s.timeLabel}>секунд</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
