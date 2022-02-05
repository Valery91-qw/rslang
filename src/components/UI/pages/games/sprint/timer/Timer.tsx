import React, { useEffect, useRef, useState } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(10);
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

  return <div>{time}</div>;
};

export default Timer;
