import React, { useEffect, useRef, useState } from 'react';
import styles from './timer.module.css';
import timerConstant from "./timer.constant";

type TimerType = {
  handlerAfter: () => void
};

const Timer: React.FC<TimerType> = ({ handlerAfter }) => {
  const [time, setTime] = useState<number>(timerConstant.totalSeconds);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (time !== timerConstant.end) {
      timerRef.current = setInterval(() => {
        setTime((currentTime) => currentTime - timerConstant.step);
      }, timerConstant.timer);
    }
    if (time === timerConstant.end) {
      handlerAfter();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRef, time, setTime, handlerAfter]);

  return <div className={styles.timer}>{time}</div>;
};

export default Timer;
