import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../constants';

interface IWord {
  id:	string;
  group:	number;
  page:	number;
  word:	string;
  image:	string;
  audio:	string;
  audioMeaning:	string;
  audioExample:	string;
  textMeaning:	string;
  textExample:	string;
  transcription:	string;
  wordTranslate:	string;
  textMeaningTranslate:	string;
  textExampleTranslate:	string;
}

const Card:React.FC = () => {
  const token = localStorage.getItem('token');
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

  // console.log(token);

   const group = 0;
   const page = 28;


  const getWords = async (e: React.MouseEvent<HTMLButtonElement>) => {

    try {
      const response = await axios.get<IWord[]>(API_URL + '/words?group=' + group + '&page=' + page,);
      console.log(response.data[0].word);
    } catch ( e ) {
      alert(e);
    }
  };

  return (
    <div>
      <h2>First Card</h2>
      <button onClick={getWords}>Получить слова</button>
    </div>
  );
};

export default Card;