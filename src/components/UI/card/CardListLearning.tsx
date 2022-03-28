import React, { useEffect, useState } from 'react';
import {IAggregatedWord, IAggregatedWords, IPage, IUserWord, IWord} from '../../../types/types';
import classes from './CardList.module.css';
import usersAPI from '../../../dal/wordAPI/usersAPI';
import Header from '../pages/Header';
import CardLearning from "./CardLearning";

const CardListLearning:React.FC = () => {
  const [userList, setUserList] = useState<IAggregatedWord[]>([]);
  let isRender = 0;

  useEffect(() => {
        usersAPI.getLearningWord()
          .then((res) => {
            const result:IAggregatedWord[] = res;
            setUserList([...result]);
            isRender += 1;
          });
  }, []);

  return (
    <div className={classes.CardListWrapper}>
      <Header />
      <div className={classes.CardList}>
        {userList.map((el:IAggregatedWord) => {
          return <CardLearning
            key={el._id}
            userListItem={el}
          />
        })}
      </div>
      <div className={classes.AddBlock}>
      </div>
    </div>
  );
};

export default CardListLearning;
