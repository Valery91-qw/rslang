import React, { useState } from 'react';
import styles from './sprint.module.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';

const Sprint: React.FC = () => {
  const [currentResult] = useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>
          Current result
          {currentResult}
        </h3>
        <Timer />
      </div>
      <DisplayedCard />
    </div>
  );
};

export default Sprint;
