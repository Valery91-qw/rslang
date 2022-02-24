import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Statistic.css';
import classes from './css/Statistic.module.css';
import GameCard from './statisticCards/GameCard';
import DiagramToday from './statisticCards/DiagramToday';
import statisticsAPI from "../../../dal/wordAPI/statisticsAPI";

const Statistic:React.FC = () => {
  const [sprintStatistic, setSprintStatistic] = useState<{seria: number, rightAnswers: number}>()
  const [audioChallengeStatistic, setAudioChallengeStatistic] = useState<{seria: number, rightAnswers: number}>()

  useEffect(() => {
    statisticsAPI.getStatistics()
        .then(res => {
          if(res) {
              if(res.optional && res.optional.sprint && res.optional.audioChallenge) {
                  setSprintStatistic(res.optional.sprint)
                  setAudioChallengeStatistic(res.optional.audioChallenge);
              } else {
                  setSprintStatistic({seria: 0, rightAnswers: 0});
                  setAudioChallengeStatistic({seria: 0, rightAnswers: 0});
              }
          }
        })
  }, [])

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
              <GameCard
                  header="СПРИНТ"
                  wordsStat={0}
                  rightWords={sprintStatistic ? sprintStatistic.rightAnswers : 0}
                  lengthSeries={sprintStatistic ? sprintStatistic.seria : 0} />
            </div>
            <div className={classes.Audio}>
              <GameCard
                  header="Аудио челендж"
                  wordsStat={0}
                  rightWords={audioChallengeStatistic ? audioChallengeStatistic.rightAnswers : 0}
                  lengthSeries={audioChallengeStatistic ? audioChallengeStatistic.seria : 0} />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Statistic;
