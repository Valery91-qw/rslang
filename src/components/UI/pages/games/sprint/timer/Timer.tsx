import React, { useEffect, useRef, useState } from 'react';
import styles from './timer.module.css';

const totalSeconds = 60;

type TimerType = {
  handlerAfter: () => void
};

const Timer: React.FC<TimerType> = ({ handlerAfter }) => {
  const [time, setTime] = useState<number>(totalSeconds);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (time !== 0) {
      timerRef.current = setInterval(() => {
        setTime((currentTime) => currentTime - 1);
      }, 1000);
    }
    if (time === 0) {
      handlerAfter();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRef, time, setTime, handlerAfter]);

  return <div className={styles.timer}>{time}</div>;
};

export default Timer;
