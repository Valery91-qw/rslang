import React from 'react';
import classes from './FrameAboutApp.module.css';
import './FrameAboutApp.css';
import ArrowRight from './ArrowRight';
// import '../games/assets/arrow.png'

const FrameAboutApp:React.FC = () => {
  return (
    <div className={classes.AppFrame}>
      <h1>Hello World, Мир, удивись!</h1>
      <p>
        Одно из лучших приложений для эффективного изучения иностранных слов
        в непринужненной обстановке и запоминая не столько отдельное слово,
        а целиком фразу, вместе с контекстом. Всегда под рукой. Можно поработать и на телефоне.
      </p>
      <p>
        Учебник включает 3600 слов, разложенных на разделы в соответствии с
        выбранным уровнем и достаточно удобной навигацией.
      </p>
      <p>
        Имееется опция по организации собственного словаря для изучения слов,
        которым желаешь уделить особое внимание, две игры и удобная статистика работы над словами.
      </p>
    </div>
  );
};

export default FrameAboutApp;