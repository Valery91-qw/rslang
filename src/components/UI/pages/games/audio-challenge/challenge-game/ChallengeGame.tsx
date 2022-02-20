import React, { useEffect, useState } from 'react';
import { IWord } from '../../../../../../types/types';
import { FILES_URL } from '../../../../../../constants';

interface IChallengeGame {
  words: Array<IWord>
  next: (id: string, isCorrect: boolean) => void
}

const ChallengeGame: React.FC<IChallengeGame> = ({ words, next }) => {
  const [isRight, setIsRight] = useState<boolean>();

  const [englishWord] = useState<IWord>(
    words[Math.floor(Math.random() * words.length)],
  );

  const isTrue = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.currentTarget.id === englishWord.id) {
      setIsRight(true);
      next(event.currentTarget.id, true);
    } else {
      setIsRight(false);
      next(event.currentTarget.id, false);
    }
  };

  useEffect(() => {
    if (isRight !== true) {
      setTimeout(() => {
        setIsRight(undefined);
      }, 500);
    }
  }, [isRight]);

  const play = () => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    audio.play();
  };

  return (
    <div>
      <h3><button type="button" onClick={play}>play</button></h3>
      <audio id="audio">
        <source src={FILES_URL + englishWord.audio} />
        <track kind="captions" />
      </audio>
      <div>
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
    </div>
  );
};

export default ChallengeGame;
