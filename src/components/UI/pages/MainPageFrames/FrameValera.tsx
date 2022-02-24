import React from 'react';
import './FrameAboutApp.css';
import imgValera from '../games/assets/valera.png';
import classes from './FrameAboutApp.module.css';

const FrameValera:React.FC = () => {
  return (
    <div className={classes.AppFrame}>
      <h1>Разработчики: Валера</h1>
      <img src={imgValera} className='img-valera'/>
      <h6>
        Настоящий “полковник” по части коддинга aka S.O.L.I.D, team-lead короче говоря.
      </h6>
      <p>
        Внес неоценимый вклад в развитие проекта.
        Установил и настроил backend, React, Redux, Router, axios нашел
        дизайн-проект оформления приложения, установил репозиторий и
        задеплоил проект. Создал обе игры и подключил Статистику.
      </p>
      {/*<p>*/}

      {/*</p>*/}
      {/*<p>*/}

      {/*</p>*/}
    </div>
  );
};

export default FrameValera;