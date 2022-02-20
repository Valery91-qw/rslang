import React, { useEffect, useState } from 'react';
import { IWord } from '../../../../../../types/types';

interface IChallengeGame {
  words: Array<IWord>
}

const ChallengeGame: React.FC<IChallengeGame> = ({ words }) => {
  const [isRight, setIsRight] = useState<boolean>();

  const [englishWord] = useState<IWord>(
    words[Math.floor(Math.random() * words.length)],
  );

  const isTrue = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.currentTarget.id === englishWord.id) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  };

  useEffect(() => {
    if (isRight !== true) {
      setTimeout(() => {
        setIsRight(undefined);
      }, 500);
    }
  }, [isRight]);

  return (
    <div>
      <h3>{englishWord.word}</h3>
      {words.map((word) => {
        return (
          <button
            type="button"
            key={word.id}
            id={word.id}
            onClick={isTrue}
          >
            {word.wordTranslate}
          </button>
        );
      })}
    </div>
  );
};

export default ChallengeGame;
