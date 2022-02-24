import React, { useState } from 'react';
import styles from './displayedCard.module.css';
import Indicator from './indicator/Indicator';
import { IWord } from '../../../../../../types/types';

interface IDisplayedCard {
  englishWord: IWord,
  translateWord: IWord,
  deleteWord: (is: string, isGuessed: boolean) => void
  increaseScore: () => void
  isLoad: boolean
}

const DisplayedCard: React.FC<IDisplayedCard> = ({
  englishWord, translateWord, deleteWord, increaseScore, isLoad,
}) => {
  const [streak, setStreak] = useState<number>(0);

  const isTrue = () => {
    if (englishWord.id === translateWord.id) {
      setStreak(() => streak + 1);
      increaseScore();
      deleteWord(englishWord.id, true);
    } else {
      setStreak(0);
      deleteWord(englishWord.id, false);
    }
  };

  const isFalse = () => {
    if (englishWord.id !== translateWord.id) {
      setStreak(() => streak + 1);
      increaseScore();
      deleteWord(englishWord.id, true);
    } else {
      setStreak(0);
      deleteWord(englishWord.id, false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Indicator amount={streak} />
      <hr className={styles.divider} />
      <span>{englishWord.word}</span>
      <span>{translateWord.wordTranslate}</span>
      <div className={styles.controls}>
        <button className={styles.button} disabled={isLoad} type="button" onClick={isTrue}>
          True
        </button>
        <button className={styles.button} disabled={isLoad} type="button" onClick={isFalse}>
          False
        </button>
      </div>
    </div>
  );
};

export default DisplayedCard;
