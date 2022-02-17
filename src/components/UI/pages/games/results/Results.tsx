import React from 'react';
import { useSelector } from 'react-redux';
import styles from './results.module.css';
import { RootStoreType } from '../../../../../bll/store';
import { MatchesWord } from '../../../../../bll/results/resultState';

interface IResults {
  handleClose: () => void
  isShow: boolean
}

const Results: React.FC<IResults> = ({ handleClose, isShow }) => {
  const matchesWord = useSelector<RootStoreType, Array<MatchesWord>>(
    (state) => state.results.statistic,
  );
  const isShowClass = isShow ? 'modal-show' : 'modal-hidden';



  return (
    <div className={`${styles.modal} ${isShowClass}`}>
      <div className={styles.modalMain}>
        <button type="button" onClick={handleClose} className={styles.closeButton}> </button>
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
                      <span>{el.isGuessed ? 'correct' : 'incorrect'}</span>
                    </div>
                  );
                })
            }
      </div>
    </div>
  );
};

export default Results;
