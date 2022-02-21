import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Statistic.css';
import classes from './css/Statistic.module.css';
import GameCard from './statisticCards/GameCard';
import DiagramToday from './statisticCards/DiagramToday';

const Statistic:React.FC = () => {
  const statisticInit = {
    totalPerDay: 150,
    correctPerDay: 90,
  };
  const wordStat = 0;

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <h1>Статистика за сегодня</h1>
        <div className={classes.Wrapper}>
          {/*! Diagram */}
          <DiagramToday newWords={150} rightWords={90} />

          {/*! Cards */}
          <div className={classes.Games}>
            <div className={classes.Sprint}>
              <GameCard header="СПРИНТ" wordsStat={0} rightWords={0} lengthSeries={0} />
            </div>
            <div className={classes.Audio}>
              <GameCard header="Аудио челендж" wordsStat={0} rightWords={0} lengthSeries={0} />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Statistic;
