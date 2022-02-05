import React, { useState } from 'react';
import './sprint.css';
import DisplayedCard from './displayed-card/DisplayedCard';

const Sprint: React.FC = () => {
  const [currentResult] = useState<number>(10);

  return (
    <div className="sprint">
      <h3>Current result {currentResult}</h3>
      <DisplayedCard />
    </div>
  );
};

export default Sprint;
