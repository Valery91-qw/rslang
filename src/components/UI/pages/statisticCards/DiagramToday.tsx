import React from 'react';
import classes from '../css/Statistic.module.css';

interface IProps {
  newWords: number;
  rightWords: number;
}

const DiagramToday:React.FC<IProps> = (props) => {
  const percentWordUp = Math.round(props.rightWords /
    props.newWords * 100);
  const percentWordDown = 100 - percentWordUp;


  return (
    <div className={classes.ToDay}>
      <div className={classes.HeaderDiagram}>
        <h3 className={classes.HeaderStatFont}>
          Изучено слов: {props.newWords}
        </h3>
      </div>

      <div className={classes.Diagram}>
        <svg viewBox="0 0 42 42" className={'donut' + classes.Donut}>
          <circle
            className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff">
          </circle>
          <circle
            className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="red" strokeWidth="3">
          </circle>
          <circle
            className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="green" strokeWidth="3"
            strokeDasharray={percentWordUp + ' ' + percentWordDown} strokeDashoffset="25">
          </circle>
        </svg>
      </div>
      <div className={classes.InsideDiagram}>
        <h3 className={classes.HeaderStatFontRound}>правильно (%)<pre></pre>
          {props.rightWords}</h3>
      </div>
    </div>
  );
};

export default DiagramToday;