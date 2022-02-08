import React from 'react';

interface ICardProps {
  width?: string;
  height?: string;
}

const Cards = ({width, height}:ICardProps) => {
  return (
    <div style={{width, height, border: '1px solid red'}}>
      
    </div>
  );
};

export default Cards;