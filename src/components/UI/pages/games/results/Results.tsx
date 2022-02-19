import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './results.module.css';
import { RootStoreType } from '../../../../../bll/store';
import { MatchesWord } from '../../../../../bll/results/resultsState';
import { removeResults } from '../../../../../bll/results/resultsActions';
import resultsConstants from './results.constants';

interface IResults {
  handleClose: () => void
  isShow: boolean
}

const Results: React.FC<IResults> = ({ handleClose, isShow }) => {
  const dispatch = useDispatch();
  const matchesWord = useSelector<RootStoreType, Array<MatchesWord>>(
    (state) => state.results.statistic,
  );
  const isShowClass = isShow ? styles.modalShow : styles.modalHidden;

  useEffect(() => {
    return () => {
      dispatch(removeResults());
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
