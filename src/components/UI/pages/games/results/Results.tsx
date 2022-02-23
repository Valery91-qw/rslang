import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './results.module.css';
import { RootStoreType } from '../../../../../bll/store';
import { MatchesWord } from '../../../../../bll/results/resultsState';
import { removeResults } from '../../../../../bll/results/resultsActions';
import resultsConstants from './results.constants';
import statisticsAPI from "../../../../../dal/wordAPI/statisticsAPI";

interface IResults {
  handleClose: () => void
  isShow: boolean
  kindOfGame: string
}

function longestSeria(words: Array<MatchesWord>) {
  let longest = [];
  let count = 0;
  for (let i = 0; i < words.length; i += 1) {
    if(!words[i].isGuessed) {
      longest.push(count);
      count = 0;
    } else {
      count += 1;
    }
  }
  return Math.max(...longest);
}

const Results: React.FC<IResults> = ({ handleClose, isShow , kindOfGame}) => {
  const dispatch = useDispatch();
  const matchesWord = useSelector<RootStoreType, Array<MatchesWord>>(
    (state) => state.results.statistic,
  );
  const isShowClass = isShow ? styles.modalShow : styles.modalHidden;

  let longest = longestSeria(matchesWord);
  let rightAnswers = Math.floor(
      (100 / matchesWord.length) * matchesWord.filter((el) => el.isGuessed).length
  );

  console.log(rightAnswers);

  useEffect(() => {
    return () => {
      statisticsAPI.setStatistics(kindOfGame, {seria: longest, rightAnswers})
          .then(() => {
            dispatch(removeResults());
          })
    };
  }, [dispatch]);

  return (
    <div className={`${styles.modal} ${isShowClass}`}>
      <div className={styles.modalMain}>
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
        >
          d
        </button>
        {
                matchesWord.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className={el.isGuessed
                        ? styles.fieldWrapper
                        : `${styles.fieldWrapper} ${styles.incorrect}`}
                    >
                      <span>{el.word}</span>
                      <span>{el.translate}</span>
                      <span>
                        {
                          el.isGuessed
                            ? resultsConstants.DisplayedResult.correct
                            : resultsConstants.DisplayedResult.incorrect
                        }
                      </span>
                    </div>
                  );
                })
            }
      </div>
    </div>
  );
};

export default Results;
