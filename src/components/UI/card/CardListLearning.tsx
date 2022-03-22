import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IPage, IUserWord, IWord } from '../../../types/types';
import classes from './CardList.module.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';
import usersAPI from '../../../dal/wordAPI/usersAPI';
import Header from '../pages/Header';

interface IProps {
  nums:IPage,
}

const CardListLearning:React.FC<IProps> = (props) => {
  const [wordList, setWordList] = useState<IWord[]>([]);
  const [userList, setUserList] = useState<IUserWord[]>([]);
  // const [userListFull, setUserListFull] = useState<IWord[]>([]);
  let isRender = 0;
  console.log(props.nums.group + '??==' + props.nums.page);

  useEffect(() => {
    wordAPI.getWords(props.nums.group, props.nums.page)
      .then((res) => {
        const result = res;
        usersAPI.getUserList()
          .then((res) => {
            setWordList([...result]);
            setUserList([...res]);
            isRender += 1;
          });
      });
  }, []);

  useEffect(() => {
    createArrayWords();
  },[userList]);

  const createIDArray = ():Array<string> => {
    return userList.map((item) => {
      return item.wordId;
    });
  }

    const createArrayWords = ():IWord[] => {
    const arrIDs = createIDArray();
      return wordList.filter((item) => arrIDs.includes(item.id));
      // return result;
    }

  return (
    <div className={classes.CardListWrapper}>
      <Header />
      <div className={classes.CardList}>
        {createArrayWords().map((el:IWord) => {
          return <Card key={el.id} oneWord={el} userList={userList}/>
        })}
      </div>
      <div className={classes.AddBlock}>
      </div>
    </div>
  );
};

export default CardListLearning;
