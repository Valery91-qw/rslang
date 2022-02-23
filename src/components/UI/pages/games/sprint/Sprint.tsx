import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './sprint.module.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import Results from '../results/Results';
import { addWordToResult } from '../../../../../bll/results/resultsActions';
import { IWord } from '../../../../../types/types';

interface ISprint {
  lvl?: number
}

const Sprint: React.FC<ISprint> = ({ lvl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentResult, setCurrentResult] = useState<number>(0);
  const [words, setWords] = useState<Array<IWord>>();
  const [oneWord, setOneWord] = useState<IWord>();
  const [twoWord, setTwoWord] = useState<IWord>();
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isShow, setShow] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);

  const increaseScore = () => {
    setCurrentResult((cur) => cur + 10);
  };

  const closeModal = () => {
    setShow(false);
    navigate('/games');
  };

  const deleteWord = (id: string, isGuessed: boolean) => {
    const word = words?.find((el) => el.id === id);
    if (!word) return;
    dispatch(addWordToResult({
      word: word.word, translate: word.wordTranslate, id: word.id, isGuessed,
    }));
    setWords(words?.filter((el) => el !== word));
  };

  const finishGame = useCallback(() => {
    setFinish(true);
    setShow(true);
  }, []);

  useEffect(() => {
    wordAPI.getWords(lvl).then((res) => {
      setWords(res);
    });
  }, [lvl]);

  useEffect(() => {
    if (words && words.length) {
      setOneWord(words[Math.floor(Math.random() * words.length)]);
      setTwoWord(words[Math.floor(Math.random() * words.length)]);
    }
    if (words?.length === 0) {
      setIsLoad(true);
      wordAPI.getWords(lvl, Math.floor(Math.random() * 10))
        .then((res) => {
          setWords([...res]);
          setIsLoad(false);
        });
    }
  }, [words, words?.length, setOneWord, setTwoWord, setFinish, finishGame, setWords, lvl]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>
          Текущий результат:
          {` ${currentResult}`}
        </h3>
        <Timer handlerAfter={finishGame} />
      </div>
      {
        oneWord && twoWord
          ? (
            <DisplayedCard
              englishWord={oneWord}
              translateWord={twoWord}
              deleteWord={deleteWord}
              increaseScore={increaseScore}
              isLoad={isLoad}
            />
          )
          : <></>
      }
      {
        finish && isShow
          ? <Results isShow={isShow} handleClose={closeModal} kindOfGame="sprint"/>
          : <></>
      }
    </div>
  );
};

Sprint.defaultProps = {
  lvl: 0,
};

export default Sprint;
