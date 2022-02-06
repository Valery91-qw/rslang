import React, { useState } from 'react';
import './displayedCard.css';
import Indicator from './indicator/Indicator';

const DisplayedCard: React.FC = () => {
  const [streak, setStreak] = useState<number>(0);

  const changeAmount = () => {
    setStreak(() => streak + 1);
  };

  const resetAmount = () => {
    setStreak(0);
  };

  return (
    <div className="displayed-card">
      <Indicator amount={streak} />
      <hr className="displayed-card__divider" />
      <span>English world</span>
      <span>Translate from English</span>
      <div className="displayed-card__controls">
        <button className="button" type="button" onClick={changeAmount}>
          True
        </button>
        <button className="button" type="button" onClick={resetAmount}>
          False
        </button>
      </div>
    </div>
  );
};

export default DisplayedCard;
