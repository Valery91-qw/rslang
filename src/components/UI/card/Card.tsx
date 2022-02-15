import React from 'react';
import { API_URL, FILES_URL, IMG_URL, SVG_URL } from '../../../constants';
import './Card.css';
import { IWord } from '../../types/types';

interface ICardProps {
  oneWord:IWord;
}

const Card:React.FC<ICardProps> = ({oneWord}) => {

  // const firstWord:IWord = {
  //   id:	'',
  //   group: 0,
  //   page:	0,
  //   word:	'',
  //   image:	'',
  //   audio:	'',
  //   audioMeaning:	'',
  //   audioExample:	'',
  //   textMeaning:	'',
  //   textExample:	'',
  //   transcription:	'',
  //   wordTranslate:	'',
  //   textMeaningTranslate:	'',
  //   textExampleTranslate:	'',
  // };

  // console.log(token);
  async function playSound() {
    // let playSoundFirst:HTMLMediaElement;
    const playSoundFirst:HTMLAudioElement  =  document.getElementById('playerFirst') as HTMLAudioElement;
    await playSoundFirst.play().then(playSoundTwo);
      // .then(playSoundSecond.play());
  }

  async function playSoundTwo() {
    const playSoundSecond:HTMLAudioElement  =  document.getElementById('playerSecond') as HTMLAudioElement;
    await playSoundSecond.play();
  }

  return (
    <div className="card">
      <audio id="playerFirst" src={FILES_URL + oneWord.audioExample} />
      <audio id="playerSecond" src={FILES_URL + oneWord.audioMeaning} />
      <div className="card-header">
        <h5>
          {oneWord.word}
          {oneWord.transcription + '\n' + oneWord.wordTranslate}
        </h5>
        <div>
          <button onClick={playSound} className="btn-sound-my">
            <img src={SVG_URL + 'loudspeaker.svg'} alt=""/>
          </button>
        </div>
      </div>
      <div>
        {/*<h5>{oneWord.wordTranslate}</h5>*/}
      </div>
      <div className="img-wrapper exmpl">
        <div className="gradient">
          <img src={FILES_URL + oneWord.image} className="card-img-top card-img-my gradient" alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h6 className="answer-text" dangerouslySetInnerHTML={{__html: oneWord.textExample}}/>
        <h6 className="answer-text" dangerouslySetInnerHTML={{__html: oneWord.textMeaning}}/>
        <div className="card-body card-add">
          <h6 className="answer-text" dangerouslySetInnerHTML={{__html: oneWord.textExampleTranslate}}/>
          <h6 className="answer-text" dangerouslySetInnerHTML={{__html: oneWord.textMeaningTranslate}}/>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary btn-primary-my">!</a><h6>Card footer</h6></div>
    </div>
  );
};

export default Card;