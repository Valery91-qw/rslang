import React from 'react';
import { API_URL, FILES_URL, IMG_URL, SVG_URL } from '../../../constants';
import './Card.css';
import classes from './Card.module.css';
import { IWord } from '../../../types/types';

interface ICardProps {
  oneWord:IWord | undefined;
}

const Card:React.FC<ICardProps> = ({oneWord}) => {

  const firstWord:IWord = {
    id:	'',
    group: 0,
    page:	0,
    word:	'',
    image:	'',
    audio:	'',
    audioMeaning:	'',
    audioExample:	'',
    textMeaning:	'',
    textExample:	'',
    transcription:	'',
    wordTranslate:	'',
    textMeaningTranslate:	'',
    textExampleTranslate:	'',
  };
  if(typeof oneWord === undefined) {
    oneWord = firstWord;
  }
  // let textExample0 = '';
  // if (typeof oneWord?.textExample === 'undefined') {
  //   textExample0 = '';
  // } else {
  //   textExample0 = oneWord.textExample;
  // }
  // typeof oneWord?.textMeaning === 'undefined'? '' : oneWord.textMeaning;

  // console.log(token);
  async function playSound() {
    const playSoundFirst:HTMLAudioElement  =  document.getElementById('playerFirst' + oneWord?.id) as HTMLAudioElement;
    playSoundFirst.addEventListener('ended', (event) => playSoundTwo());
    await playSoundFirst.play();
  }

  async function playSoundTwo() {
    const playSoundSecond:HTMLAudioElement  =  document.getElementById('playerSecond' + oneWord?.id) as HTMLAudioElement;
    playSoundSecond.addEventListener('ended', (event) => playSoundThree());
    await playSoundSecond.play();
  }

  async function playSoundThree() {
    const playSoundThird:HTMLAudioElement  =  document.getElementById('playSoundThird' + oneWord?.id) as HTMLAudioElement;
    await playSoundThird.play();
  }

  // @ts-ignore
  return (
    <div className={'card ' + classes.Card}>
      <audio id={'playerFirst' + oneWord?.id}>
        <source src={FILES_URL + oneWord?.audio}/>
      </audio>
      <audio id={'playerSecond' + oneWord?.id} src={FILES_URL + oneWord?.audioExample} />
      <audio id={'playSoundThird' + oneWord?.id} src={FILES_URL + oneWord?.audioMeaning} />
      <div className="card-header">
        <h5>
          {oneWord?.word + ' '}
          {oneWord?.transcription + '\n' + oneWord?.wordTranslate}
        </h5>
        <div>
          <button onClick={playSound} className='btn-sound-my'>
            <img src={SVG_URL + 'loudspeaker.svg'} alt=""/>
          </button>
        </div>
      </div>
      <div>
      </div>
      <div className="img-wrapper exmpl">
        <div className="gradient">
          <img src={FILES_URL + oneWord?.image} className={'card-img-top gradient' + classes.CardImgMy} alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h6 className="answer-text" dangerouslySetInnerHTML={{__html: typeof oneWord?.textExample === 'undefined'? '' : oneWord.textExample}}/>
        <h6 className="answer-text" dangerouslySetInnerHTML={{__html: typeof oneWord?.textMeaning === 'undefined'? '' : oneWord.textMeaning}}/>
        <div className="card-body card-add">
          <h6 className="answer-text">{oneWord?.textExampleTranslate}</h6>
          <h6 className="answer-text">{oneWord?.textMeaningTranslate}</h6>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary btn-primary-my">!</a><h6>Card footer</h6></div>
    </div>
  );
};

export default Card;