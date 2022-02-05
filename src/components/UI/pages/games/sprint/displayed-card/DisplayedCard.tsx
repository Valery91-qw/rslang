import React from 'react';
import './displayedCard.css';

const DisplayedCard: React.FC = () => {
  return (
    <div className="displayed-card">
      <span>English world</span>
      <span>Translate from English</span>
      <div className="displayed-card__controls">
        <button type="button">True</button>
        <button type="button">False</button>
      </div>
    </div>
  );
};

export default DisplayedCard;
