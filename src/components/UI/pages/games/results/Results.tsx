import React from 'react';
import styles from './results.module.css';

export type MatchesWord = {
  word: string,
  translate: string,
  isGuessed: boolean,
  id: string,
};

interface IResults {
  handleClose: () => void
  isShow: boolean
  matchesWord: Array<MatchesWord>
}

const Results: React.FC<IResults> = ({ handleClose, isShow, matchesWord }) => {
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
