import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { IWord } from '../../types/types';
import wordListEx from './userExample';

const CardsList:React.FC = () => {
  let oneWord = wordListEx[0];

  const [wordList, setWordList] = useState<IWord[]>([]);
  useEffect(() => {

  },[]);

  // const token = localStorage.getItem('token');
  // const word:IWord = {
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

  // const group = 0;
  // const page = 28;


  // const getWords = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //
  //   try {
  //     const response = await axios.get<IWord[]>(API_URL + '/words?group=' + group + '&page=' + page,);
  //     setWordList(response.data);
  //     console.log(response.data[0].word);
  //
  //   } catch ( e ) {
  //     alert(e);
  //   }
  // };

  return (
    <div>
      <Card key={oneWord.id} oneWord={oneWord} />
    </div>
  );
};

export default CardsList;