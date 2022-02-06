import React, { useState } from 'react';
import './sprint.css';
import DisplayedCard from './displayed-card/DisplayedCard';
import Timer from './timer/Timer';

const Sprint: React.FC = () => {
  const [currentResult] = useState<number>(0);

  return (
    <div className="sprint">
      <div className="sprint-header">
        <h3>Current result {currentResult}</h3>
        <Timer />
      </div>
      <DisplayedCard />
    </div>
  );
};

export default Sprint;
