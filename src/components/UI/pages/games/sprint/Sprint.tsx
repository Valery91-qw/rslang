import React, { useState } from 'react';
import './Sprint.css';

const Sprint: React.FC = () => {
  const [currentResult] = useState<number>(10);

  return (
    <div className="sprint">
      <h3>Current result {currentResult}</h3>
      <div className="displayedCard">
        <span>English world</span>
        <span>Translate from English</span>
        <div className="displayedCard__controls">
          <button type="button">True</button>
          <button type="button">False</button>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
