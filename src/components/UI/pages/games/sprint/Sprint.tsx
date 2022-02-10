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
  const [words, setWords] = useState<Array<WordAPIType>>();
  const [oneWord, setOneWord] = useState<WordAPIType>();
  const [twoWord, setTwoWord] = useState<WordAPIType>();

  useEffect(() => {
    wordAPI.wordAPI.getWords().then((res) => {
      setWords(res);
    });
  }, []);

  const deleteWord = (id: string) => {
    const word = words?.find((el) => el.id === id);
    setWords(words?.filter((el) => el !== word));
  };

  useEffect(() => {
    if (words && words.length >= 1) {
      setOneWord(words[Math.floor(Math.random() * words.length)]);
      setTwoWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [words, words?.length, setOneWord, setTwoWord]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>
          Current result
          {currentResult}
        </h3>
        <Timer />
      </div>
      {
        oneWord && twoWord ? <DisplayedCard englishWord={oneWord} translateWord={twoWord} deleteWord={deleteWord} /> : 'what'
      }
    </div>
  );
};

export default Sprint;
