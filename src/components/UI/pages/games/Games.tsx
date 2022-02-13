import React from 'react';
import { Link } from 'react-router-dom';
import styles from './games.module.css';
import run from './assets/running-run-svgrepo-com.svg';
import listen from './assets/person-face-listening-music-with-auriculars-svgrepo-com.svg';

const runIcon = {
  backgroundImage: `url(${run})`,
};

const listenIcon = {
  backgroundImage: `url(${listen})`,
};

const Games: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="sprint" className={styles.link} style={runIcon} />
      <Link to="audioChallenge" className={styles.link} style={listenIcon} />
    </div>
  );
};

export default Games;
