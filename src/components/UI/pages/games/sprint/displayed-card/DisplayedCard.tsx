import React, { useState } from 'react';
import styles from './displayedCard.module.css';
import Indicator from './indicator/Indicator';

const DisplayedCard: React.FC = () => {
  const [streak, setStreak] = useState<number>(0);

  const changeAmount = () => {
    setStreak(() => streak + 1);
  };

  const resetAmount = () => {
    setStreak(0);
  };

  return (
    <div className={styles.wrapper}>
      <Indicator amount={streak} />
      <hr className={styles.divider} />
      <span>English world</span>
      <span>Translate from English</span>
      <div className={styles.controls}>
        <button className={styles.button} type="button" onClick={changeAmount}>
          True
        </button>
        <button className={styles.button} type="button" onClick={resetAmount}>
          False
        </button>
      </div>
    </div>
  );
};

export default DisplayedCard;
