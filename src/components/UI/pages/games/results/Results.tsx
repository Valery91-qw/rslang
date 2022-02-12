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
    <div className={`modal ${isShowClass}`}>
      <div className={styles.modalMain}>
        <button type="button" onClick={handleClose}>close</button>
        {
                matchesWord.map((el) => {
                  return (
                    <div key={el.id}>
                      <span>{el.word}</span>
                      <span>{el.translate}</span>
                      <span>{String(el.isGuessed)}</span>
                    </div>
                  );
                })
            }
      </div>
    </div>
  );
};

export default Results;
