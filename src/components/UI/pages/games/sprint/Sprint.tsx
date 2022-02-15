import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sprint.module.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';
import wordAPI from '../../../../../dal/wordAPI/wordAPI';
import { WordAPIType } from '../../../../../dal/wordAPI/wordAPI.type';
import Results, { MatchesWord } from '../results/Results';

interface SprintType {
  lvl?: number
}

const Sprint: React.FC<SprintType> = ({ lvl }) => {
  const navigate = useNavigate();
  const [currentResult, setCurrentResult] = useState<number>(0);
  const [words, setWords] = useState<Array<WordAPIType>>();
  const [oneWord, setOneWord] = useState<WordAPIType>();
  const [twoWord, setTwoWord] = useState<WordAPIType>();
  const [finish, setFinish] = useState(false);
  const [statistic, setStatistic] = useState<Array<MatchesWord>>([]);
  const [isShow, setShow] = useState<boolean>(false);

  const increaseScore = () => {
    setCurrentResult((cur) => cur + 10);
  };

  const closeModal = () => {
    setShow(false);
    navigate('/games');
  };

  useEffect(() => {
    wordAPI.getWords(lvl).then((res) => {
      setWords(res);
    });
  }, [lvl]);

  useEffect(() => {
    if (words && words.length < 10) {
      wordAPI.getWords(lvl, Math.floor(Math.random() * 10))
        .then((res) => {
          setWords([...words, ...res]);
        });
    }
  }, [words, words?.length, lvl]);

  const deleteWord = (id: string, isGuessed: boolean) => {
    const word = words?.find((el) => el.id === id);
    if (!word) return;
    setStatistic([...statistic, {
      word: word.word, translate: word.wordTranslate, id: word.id, isGuessed,
    }]);
    setWords(words?.filter((el) => el !== word));
  };

  const finishGame = useCallback(() => {
    setFinish(true);
    setShow(true);
  }, []);

  useEffect(() => {
    if (words && words.length) {
      setOneWord(words[Math.floor(Math.random() * words.length)]);
      setTwoWord(words[Math.floor(Math.random() * words.length)]);
    }
    if (words?.length === 0) {
      finishGame();
    }
  }, [words, words?.length, setOneWord, setTwoWord, setFinish, finishGame]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>
          Current result
          {currentResult}
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
            />
          )
          : <></>
      }
      {
        finish && isShow
          ? <Results matchesWord={statistic} isShow={isShow} handleClose={closeModal} />
          : <></>
      }
    </div>
  );
};

Sprint.defaultProps = {
  lvl: 0,
};

export default Sprint;
