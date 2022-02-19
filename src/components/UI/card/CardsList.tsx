import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IWord } from '../../../types/types';
import classes from './CardList.module.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';


const CardsList:React.FC = () => {
  const [wordList, setWordList] = useState<IWord[]>([]);
  const group = 0;
  const page = 12;

  useEffect(() => {
    wordAPI.getWords(group, page).then((res) => setWordList(res));
  }, []);
  return (
    <div className={classes.CardList}>
      {wordList.map((el:IWord) => {
       return <Card key={el.id} oneWord={el}/>
      })}
    </div>
  );
};

export default CardsList;