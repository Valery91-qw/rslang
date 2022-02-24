import React from 'react';
import classes from './FrameAboutApp.module.css';
import './FrameAboutApp.css';
import imgArrow from '../games/assets/arrow.png'

const ArrowRight:React.FC = () => {
  const ArrowImg = `arrow-right ${classes.ArrowRight}`;
  return (
    <div className={ArrowImg}>
      <img src={imgArrow} alt="Arrow"/>
    </div>
  );
};

export default ArrowRight;