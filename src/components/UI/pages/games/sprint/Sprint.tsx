import React, { useState } from 'react';
import './sprint.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';

const Sprint: React.FC = () => {
  const [currentResult] = useState<number>(10);

  return (
    <div className="sprint">
      <h3>Current result {currentResult}</h3>
      <Timer />
      <DisplayedCard />
    </div>
  );
};

export default Sprint;
