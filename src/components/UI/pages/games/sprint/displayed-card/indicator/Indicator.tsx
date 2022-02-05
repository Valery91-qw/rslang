import React from 'react';
import './indicator.css';

const Indicator: React.FC<{ amount: number }> = ({ amount }) => {
  const col = amount % 4;

  return (
    <ul className="indicator">
      <li className={col - 1 >= 0 ? 'check' : 'uncheck'} />
      <li className={col - 1 >= 1 ? 'check' : 'uncheck'} />
      <li className={col - 1 >= 2 ? 'check' : 'uncheck'} />
    </ul>
  );
};

export default Indicator;
