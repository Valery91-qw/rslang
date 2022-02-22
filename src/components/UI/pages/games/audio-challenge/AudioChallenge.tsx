import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Attempt from './attempt/Attempt';
import styles from './audioChallange.module.css';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import { IWord } from '../../../../../types/types';
import ChallengeGame from './challenge-game/ChallengeGame';
import { addWordToResult } from '../../../../../bll/results/resultsActions';
import Results from '../results/Results';

interface IAudioChallenge {
  lvl?: number
}

const wordAmount = 4;

const AudioChallenge: React.FC<IAudioChallenge> = ({ lvl }) => {
  const [amountAttempt, setAmountAttempt] = useState<number>(20);
  const [words, setWords] = useState<Array<IWord>>();
  const [currentWordsInGame, setCurrentWordsInGame] = useState<Array<IWord>>([]);
  const [isShow, setShow] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [newRequest, setNewRequest] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    setShow(false);
    navigate('/games');
  };

  useEffect(() => {
    if (amountAttempt === 0) {
      setFinish(true);
      setShow(true);
    }
  }, [amountAttempt]);

  useEffect(() => {
    if (!words) {
      wordAPI.getWords(lvl, Math.floor(Math.random() * 20))
        .then((res) => setWords(res));
    }
    if ((amountAttempt % 5) === 1) {
      setNewRequest(true);
      return;
    }
    if (newRequest) {
      wordAPI.getWords(lvl, Math.floor(Math.random() * 20))
        .then((res) => {
          setWords(res);
          setNewRequest(false);
        });
    }
  }, [lvl, words, amountAttempt, newRequest]);

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
    const word = currentWordsInGame.find((el) => el.id === id);
    if (!word) return;
    dispatch(addWordToResult({
      word: word.word, translate: word.wordTranslate, id: word.id, isGuessed: isCorrect,
    }));
    setCurrentWordsInGame([]);
  };

  return (
    <div className={styles.challengeWrapper}>
      <Attempt amountAttempt={amountAttempt} />
      {
        currentWordsInGame.length === wordAmount
          ? <ChallengeGame words={currentWordsInGame} next={next} />
          : <></>
      }
      {
        finish && isShow
          ? <Results isShow={isShow} handleClose={closeModal} />
          : <></>
      }
    </div>
  );
};

AudioChallenge.defaultProps = {
  lvl: 0,
};

export default AudioChallenge;
