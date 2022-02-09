import React, { useState } from 'react';

interface ICardProps {
  width?: string;
  height?: string;
  onClick: (user: string) => void;
}

const Cards:React.FC<ICardProps> =
  ({
     width,
     height,
     children,
    onClick,
  }) => {
    const [state, setState] = useState('Igor');
  return (
    <div style={{width, height, border: '1px solid red'}} onClick={() => onClick(state)}>
      {children}
    </div>
  );
};

export default Cards;