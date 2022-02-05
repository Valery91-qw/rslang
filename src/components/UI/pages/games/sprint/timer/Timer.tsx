import React, { useEffect, useRef, useState } from 'react';
import './timer.css';

const totalSeconds = 10;

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(totalSeconds);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (time !== 0) {
      timerRef.current = setInterval(() => {
        setTime((currentTime) => currentTime - 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRef, time, setTime]);

  return <div className="timer">{time}</div>;
};

export default Timer;
