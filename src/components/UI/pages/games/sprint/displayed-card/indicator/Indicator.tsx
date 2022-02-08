import React from 'react';
import styles from './indicator.module.css';

const Indicator: React.FC<{ amount: number }> = ({ amount }) => {
  const col = amount % 4;

  return (
    <ul className={styles.indicator}>
      <li className={col - 1 >= 0 ? styles.check : styles.uncheck} />
      <li className={col - 1 >= 1 ? styles.check : styles.uncheck} />
      <li className={col - 1 >= 2 ? styles.check : styles.uncheck} />
    </ul>
  );
};

export default Indicator;
