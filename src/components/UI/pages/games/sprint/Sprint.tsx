import React, { useEffect, useState } from 'react';
import styles from './sprint.module.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import { WordAPIType } from '../../../../../dal/wordAPI/wordAPI.type';

interface SprintType {
  isLogin: boolean
}

const Sprint: React.FC<SprintType> = () => {
  const [currentResult] = useState<number>(0);
  const [, setWords] = useState<Array<WordAPIType>>();

  useEffect(() => {
    wordAPI.wordAPI.getWords().then((res) => {
      setWords(res);
    });
  }, []);

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
