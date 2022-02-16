import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { IWord } from '../../types/types';
import wordListEx from './userExample';
import { API_URL } from '../../../constants';
import classes from './CardList.module.css';

const CardsList:React.FC = () => {
  // let oneWord = wordListEx[0];
  const [wordList, setWordList] = useState<IWord[]>([]);
  // setWordList(typeof wordList === 'undefined'? wordListEx: wordList);
  // setWordList(wordListEx);
  const [oneWord, SetOneWord] = useState<IWord>(wordListEx[0]);

  const group = 0;
  const page = 0;

  // useEffect(() => {
  //  getWords();
  //   // setWordList(typeof wordList === 'undefined'? wordListEx: wordList);
  //   console.log(oneWord);
  //
  // }, []);

  const getWords = async () => {
    try {
      const response = await axios.get<IWord[]>(API_URL + '/words?group=' + group + '&page=' + page,);
      setWordList(response.data);
      SetOneWord(response.data[12]);
      console.log(oneWord?.word);

    } catch ( e ) {
      alert(e);
    }
  };

  return (
    <div className={classes.CardList}>
      {/*{wordList.map((el:IWord) => {*/}
      {/*  <Card key={el.id} oneWord={el}/>*/}
      {/*})*/}
      {/*}*/}
      {/*<Card key={typeof oneWord?.id === 'undefined'? null:  oneWord.id} oneWord={typeof oneWord === 'undefined'? wordListEx[0]: oneWord} />*/}
      <Card key={wordListEx[0].id} oneWord={wordListEx[0]} />
      <Card key={wordListEx[1].id} oneWord={wordListEx[1]} />
      <Card key={wordListEx[2].id} oneWord={wordListEx[2]} />
      <Card key={wordListEx[3].id} oneWord={wordListEx[3]} />
      <Card key={wordListEx[4].id} oneWord={wordListEx[4]} />
    </div>
  );
};

export default CardsList;