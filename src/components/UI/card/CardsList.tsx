import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IPage, IUserWord, IWord } from '../../../types/types';
import classes from './CardList.module.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';
import usersAPI from '../../../dal/wordAPI/usersAPI';

interface IProps {
  nums:IPage,
}
const CardsList:React.FC<IProps> = (props) => {
  const [wordList, setWordList] = useState<IWord[]>([]);
  const [userList, setUserList] = useState<IUserWord[]>([]);
  console.log(props.nums.group + '??==' + props.nums.page);
  // const

  useEffect(() => {
    passPageToLocaleStorage(props.nums.page, props.nums.group)
    console.log(props.nums.group + '=useEffect CardLis getWordAPI=' + props.nums.page);
    wordAPI.getWords(props.nums.group, props.nums.page).then((res) => setWordList(res));
    usersAPI.getUserList().then((res) => {
      setUserList(res)
    });
    console.log(userList);
  }, [props.nums.group, props.nums.page]);

  const passPageToLocaleStorage = (page:number, group:number) => {
    localStorage.setItem('page', String(page));
    localStorage.setItem('group', String(group));
    console.log('localStorage - established');
  };

  return (
    <div className={classes.CardListWrapper}>
      <div className={classes.CardList}>
        {wordList.map((el:IWord) => {
          return <Card key={el.id} oneWord={el} userList={userList}/>
        })}
      </div>
        <div className={classes.AddBlock}>

        </div>
    </div>
  );
};

export default CardsList;
