import React, { useEffect, useState } from 'react';
import {
  FILES_URL, firstWord, SVG_URL,
} from '../../../constants';
import './Card.css';
import classes from './Card.module.css';
import { IUserWord, IWord } from '../../../types/types';
import learningWordAPI from '../../../dal/wordAPI/learninWordAPI';
import usersAPI from '../../../dal/wordAPI/usersAPI';

interface ICardProps {
  oneWord:IWord | undefined;
  userList:IUserWord[];
}
let cardColor:string;

const Card:React.FC<ICardProps> = ({ oneWord, userList}) => {
  const [isLearning, setIsLearning] = useState<boolean>(false);
  const [userListNew, setUserListNew] = useState<IUserWord[]>(userList);
  let isLearningShort = false;
  if (typeof oneWord === 'undefined') {
    oneWord = firstWord;
  }
  useEffect(() => {

  },[isLearningShort])

  const checkLearningID = ():void => {
    const isShort = userListNew.map((el) => {
      return el.wordId;
    })
    isLearningShort = isShort.includes(oneWord?.id!);
    if (isLearningShort) {
      cardColor = classes.CardLearning;
    } else {
      cardColor = classes.Card;
    }
  }
  checkLearningID();

  const changeStatusCard = () => {
    learningWordAPI.createUserWord(typeof oneWord?.id === 'undefined' ? '' : oneWord?.id)
      .then(() => {
        usersAPI.getUserList()
          .then((res) => {
            setUserListNew(res);
            setIsLearning(true);
          })
      })
  }
  async function playSound() {
    const playSoundFirst:HTMLAudioElement = document.getElementById(`playerFirst${oneWord?.id}`) as HTMLAudioElement;
    playSoundFirst.addEventListener('ended', () => playSoundTwo());
    await playSoundFirst.play();
  }
  async function playSoundTwo() {
    const playSoundSecond:HTMLAudioElement = document.getElementById(`playerSecond${oneWord?.id}`) as HTMLAudioElement;
    playSoundSecond.addEventListener('ended', () => playSoundThree());
    await playSoundSecond.play();
  }
  async function playSoundThree() {
    const playSoundThird:HTMLAudioElement = document.getElementById(`playSoundThird${oneWord?.id}`) as HTMLAudioElement;
    await playSoundThird.play();
  }

  return (
    <div className={`card ${cardColor}`}>
      <audio id={`playerFirst${oneWord?.id}`}>
        <source src={FILES_URL + oneWord?.audio} />
      </audio>
      <audio id={`playerSecond${oneWord?.id}`} src={FILES_URL + oneWord?.audioExample} />
      <audio id={`playSoundThird${oneWord?.id}`} src={FILES_URL + oneWord?.audioMeaning} />
      <div className="card-header">
        <h5>
          {`${oneWord?.word} `}
          {`${oneWord?.transcription}\n${oneWord?.wordTranslate}`}
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
          <img src={FILES_URL + oneWord?.image} className={`card-img-top gradient${classes.CardImgMy}`} alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h6 className="answer-text" dangerouslySetInnerHTML={{ __html: typeof oneWord?.textExample === 'undefined' ? '' : oneWord.textExample }} />
        <h6 className="answer-text" dangerouslySetInnerHTML={{ __html: typeof oneWord?.textMeaning === 'undefined' ? '' : oneWord.textMeaning }} />
        <div className="card-body card-add">
          <h6 className="answer-text">{oneWord?.textExampleTranslate}</h6>
          <h6 className="answer-text">{oneWord?.textMeaningTranslate}</h6>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={() => {
          changeStatusCard();
        }} className="btn btn-primary btn-primary-my">!</button>
        <h6>Выбирайте сложность</h6>
      </div>
    </div>
  );
};

export default Card;
