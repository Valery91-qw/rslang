import React, { useState } from 'react';
import './displayedCard.css';
import Indicator from './indicator/Indicator';

const DisplayedCard: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const changeAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="displayed-card">
      <Indicator amount={amount} />
      <hr style={{ width: '100%' }} />
      <span>English world</span>
      <span>Translate from English</span>
      <div className="displayed-card__controls">
        <button onClick={changeAmount} type="button">
          True
        </button>
        <button type="button">False</button>
      </div>
    </div>
  );
};

export default DisplayedCard;
