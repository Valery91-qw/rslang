import React from 'react';
import { Link } from 'react-router-dom';
import styles from './games.module.css';
// import run from './assets/running-run-svgrepo-com.svg';
// import listen from './assets/person-face-listening-music-with-auriculars-svgrepo-com.svg';
import listen from './assets/pngaudio.png';
import run from './assets/rocket.png';
import Footer from '../Footer';
import Header from '../Header';

const runIcon = {
  backgroundImage: `url(${run})`,
};

const listenIcon = {
  backgroundImage: `url(${listen})`,
};

const Games: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <h1>Games</h1>
      <div className="main">
        <div className={styles.wrapper}>
          <div className={styles.Sprint}>
            <h2 className={styles.headerSprint}>Sprint</h2>
            <Link to="/rslang/games/sprint" className={styles.link} style={runIcon} />
          </div>
          <div className={styles.Audio}>
            <h2 className={styles.headerAudio}>Audio challenge</h2>
            <Link to="/rslang/games/audioChallenge" className={styles.link} style={listenIcon} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Games;
