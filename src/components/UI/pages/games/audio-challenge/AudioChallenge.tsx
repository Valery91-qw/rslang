import React, { useEffect, useState } from 'react';
import Attempt from './attempt/Attempt';
import styles from './audioChallange.module.css';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import { IWord } from '../../../../../types/types';
import ChallengeGame from './challenge-game/ChallengeGame';

interface IAudioChallenge {
  lvl?: number
}

const wordAmount = 4;

const AudioChallenge: React.FC<IAudioChallenge> = ({ lvl }) => {
  const [amountAttempt, setAmountAttempt] = useState<number>(20);
  const [words, setWords] = useState<Array<IWord>>();
  const [currentWordsInGame, setCurrentWordsInGame] = useState<Array<IWord>>([]);

  useEffect(() => {
    if (!words) {
      wordAPI.getWords(lvl, Math.floor(Math.random() * 20))
        .then((res) => setWords(res));
    }
  }, [lvl, words]);

  useEffect(() => {
    if (words && words.length && currentWordsInGame.length < wordAmount) {
      for (let i = 0; i < words.length; i += 1) {
        const word = words[Math.floor(Math.random() * words?.length)];
        if (currentWordsInGame.find((el) => el.id === word.id)) {
          setCurrentWordsInGame(currentWordsInGame.filter((el) => el.id !== word.id));
        } else {
          setCurrentWordsInGame([...currentWordsInGame, word]);
        }
      }
    }
  }, [words, words?.length, currentWordsInGame.length, currentWordsInGame]);

  const next = (id: string, isCorrect: boolean) => {
    setAmountAttempt((cur) => cur - 1);
    const word = currentWordsInGame.filter((el) => el.id !== id);
    setCurrentWordsInGame(word);
    console.log(isCorrect);
  };

  return (
    <div className={styles.challengeWrapper}>
      <Attempt amountAttempt={amountAttempt} />
      {
        currentWordsInGame.length === wordAmount
          ? <ChallengeGame words={currentWordsInGame} next={next} />
          : <></>
      }
    </div>
  );
};

AudioChallenge.defaultProps = {
  lvl: 0,
};

export default AudioChallenge;
