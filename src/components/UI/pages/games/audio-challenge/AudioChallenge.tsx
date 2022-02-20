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
  const [amountAttempt] = useState<number>(20);
  const [words, setWords] = useState<Array<IWord>>();

  const [currentWordsInGame, setCurrentWordsInGame] = useState<Array<IWord>>([]);

  useEffect(() => {
    wordAPI.getWords(lvl, 0)
      .then((res) => setWords(res));
  }, [lvl]);

  useEffect(() => {
    if (words && words.length && currentWordsInGame.length < wordAmount) {
      for (let i = 0; i < words.length; i += 1) {
        const word = words[Math.floor(Math.random() * words?.length)];
        if (currentWordsInGame.find((el) => el.id === word.id)) {
          return;
        }
        setCurrentWordsInGame([...currentWordsInGame, word]);
      }
    }
  }, [words, words?.length, currentWordsInGame.length, currentWordsInGame]);

  return (
    <div className={styles.challengeWrapper}>
      <Attempt amountAttempt={amountAttempt} />
      {
        currentWordsInGame.length === wordAmount
          ? <ChallengeGame words={currentWordsInGame} />
          : <></>
      }
    </div>
  );
};

AudioChallenge.defaultProps = {
  lvl: 0,
};

export default AudioChallenge;
