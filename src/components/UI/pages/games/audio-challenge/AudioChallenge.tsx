import React, { useEffect, useState } from 'react';
import Attempt from './attempt/Attempt';
import styles from './audioChallange.module.css';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import { IWord } from '../../../../../types/types';

interface IAudioChallenge {
  lvl?: number
}

const AudioChallenge: React.FC<IAudioChallenge> = ({ lvl }) => {
  const [amountAttempt] = useState<number>(20);
  const [ , setWords] = useState<Array<IWord>>();

  useEffect(() => {
    wordAPI.getWords(lvl, 0)
      .then((res) => setWords(res));
  }, [lvl]);

  return (
    <div className={styles.challengeWrapper}>
      <Attempt amountAttempt={amountAttempt} />
      {lvl}
    </div>
  );
};

AudioChallenge.defaultProps = {
  lvl: 0,
};

export default AudioChallenge;
