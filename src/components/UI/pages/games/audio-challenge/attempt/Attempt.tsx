import React from 'react';
import styles from './attempt.module.css';

interface IAttempt {
  amountAttempt: number
}

const Attempt: React.FC<IAttempt> = ({ amountAttempt }) => {
  return (
    <div className={styles.attempt}>
      {amountAttempt}
    </div>
  );
};

export default Attempt;
