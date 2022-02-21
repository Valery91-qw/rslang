import React from 'react';
import classes from '../css/Statistic.module.css';

interface IProps {
  header: string;
  wordsStat: number;
  rightWords: number;
  lengthSeries: number;
}

const GameCard:React.FC<IProps> = (props) => {
  return (
    <div className={`card ${classes.StatCard}`}>
      <div className={`card-header ${classes.CardTitle}`}>
        {props.header}
      </div>
      <div className={`card-body ${classes.cardBody}`}>
        <div className={classes.CardBodyItem}>
          <h3 className={`card-title ${classes.CardBodyFont}`}>Изучено слов:</h3>
          <h3 className={`card-title ${classes.CardBodyFont}`}>{props.wordsStat}</h3>
        </div>
        <div className={classes.CardBodyItem}>
          <h3 className={`card-title ${classes.CardBodyFont}`}>Правильно (%)</h3>
          <h3 className={`card-title ${classes.CardBodyFont}`}>{props.rightWords}</h3>
        </div>
        <div className={classes.CardBodyItem}>
          <h3 className={`card-title ${classes.CardBodyFont}`}>Самая длинная серия:</h3>
          <h3 className={`card-title ${classes.CardBodyFont}`}>{props.lengthSeries}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
