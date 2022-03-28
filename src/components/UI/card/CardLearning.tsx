import React from 'react';
import {FILES_URL, SVG_URL} from '../../../constants';
import classes from './Card.module.css';
import {IAggregatedWord} from "../../../types/types";

interface IProps {
  key:string;
  userListItem:IAggregatedWord;
}

const CardLearning:React.FC<IProps> = (props) => {
  const cardColor = classes.CardLearning;

  async function playSound() {
    const playSoundFirst:HTMLAudioElement = document.getElementById(`playerFirst${props.userListItem?._id}`) as HTMLAudioElement;
    playSoundFirst.addEventListener('ended', () => playSoundTwo());
    await playSoundFirst.play();
  }
  async function playSoundTwo() {
    const playSoundSecond:HTMLAudioElement = document.getElementById(`playerSecond${props.userListItem?._id}`) as HTMLAudioElement;
    playSoundSecond.addEventListener('ended', () => playSoundThree());
    await playSoundSecond.play();
  }
  async function playSoundThree() {
    const playSoundThird:HTMLAudioElement = document.getElementById(`playSoundThird${props.userListItem?._id}`) as HTMLAudioElement;
    await playSoundThird.play();
  }

  return (
    <div className={`card ${cardColor}`}>
      <audio id={`playerFirst${props.userListItem?._id}`}>
        <source src={FILES_URL + props.userListItem?.audio} />
      </audio>
      <audio id={`playerSecond${props.userListItem?._id}`} src={FILES_URL + props.userListItem?.audioExample} />
      <audio id={`playSoundThird${props.userListItem?._id}`} src={FILES_URL + props.userListItem?.audioMeaning} />
      <div className="card-header">
        <h5>
          {`${props.userListItem?.word} `}
          {`${props.userListItem?.transcription}\n${props.userListItem?.wordTranslate}`}
        </h5>
        <div>
          <button onClick={playSound} className="btn-sound-my">
            <img src={`${SVG_URL}loudspeaker.svg`} alt="" />
          </button>
        </div>
      </div>
      <div />
      <div className="img-wrapper example">
        <div className="gradient">
          <img src={FILES_URL + props.userListItem?.image} className={`card-img-top gradient${classes.CardImgMy}`} alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h6 className="answer-text" dangerouslySetInnerHTML={{ __html: typeof props.userListItem?.textExample === 'undefined' ? '' : props.userListItem.textExample }} />
        <h6 className="answer-text" dangerouslySetInnerHTML={{ __html: typeof props.userListItem?.textMeaning === 'undefined' ? '' : props.userListItem.textMeaning }} />
        <div className="card-body card-add">
          <h6 className="answer-text">{props.userListItem?.textExampleTranslate}</h6>
          <h6 className="answer-text">{props.userListItem?.textMeaningTranslate}</h6>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={() => {
          // changeStatusCard();
        }} className="btn btn-primary btn-primary-my">!</button>
        <h6>Выбирайте сложность</h6>
      </div>
    </div>
  );
};

export default CardLearning;