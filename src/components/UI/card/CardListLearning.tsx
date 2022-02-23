import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IPage, IUserWord, IWord } from '../../../types/types';
import classes from './CardList.module.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';
import usersAPI from '../../../dal/wordAPI/usersAPI';

interface IProps {
  nums:IPage,
}

const CardListLearning:React.FC<IProps> = (props) => {
  const [wordList, setWordList] = useState<IWord[]>([]);
  const [userList, setUserList] = useState<IUserWord[]>([]);
  const [userListFull, setUserListFull] = useState<IWord[]>([]);
  let isRender = 0;
  console.log(props.nums.group + '??==' + props.nums.page);

  useEffect(() => {
    // passPageToLocaleStorage(props.nums.page, props.nums.group)
    // console.log(props.nums.group + '=useEffect CardLis getWordAPI=' + props.nums.page);
    wordAPI.getWords(props.nums.group, props.nums.page)
      .then((res) => {
        const result = res;
        usersAPI.getUserList()
          .then((res) => {
            setWordList([...result]);
            setUserList([...res]);
            // setUserList(res);
            // createArrayWords();
            console.log(`setUserList ${res[0].wordId}`);
            // console.log(createIDArray());
            //  console.log(createArrayWords());
            // console.log(createIDArray());
            isRender += 1;
          });
      });
    console.log(userList);
  }, []);

  useEffect(() => {
    createArrayWords();
    console.log(createIDArray());
    console.log(createArrayWords());
  },[userList]);

  const createIDArray = ():Array<string> => {
    return userList.map((item, index) => {
      return item.wordId;
    });
  }

  // const createArrayWords = ():IWord[] => {
  //   const idArrayUserWords = createIDArray();
  //   const learningArr = wordList.map((item, index) => {
  //     if (idArrayUserWords.includes(item.id)) return item;
  //   })
  //   // @ts-ignore
  //   const result:IWord[] = learningArr.filter((item) => {
  //     // return  typeof item !== 'undefined';
  //     if (typeof item === 'undefined') {
  //       return {};
  //     } else {
  //       return item;
  //     }
  //   });
  //   return result;
  // };

    const createArrayWords = ():IWord[] => {
    const arrIDs = createIDArray();
    console.log(arrIDs);
      const result = wordList.filter((item) => arrIDs.includes(item.id));
      return result;
    }

  // console.log(userList[0].wordId, '====', wordList[0].word);

  // console.log((typeof userList[0].wordId === 'undefined')? '==empty==': userList[0].wordId);

  // useEffect(() => {
  //   passPageToLocaleStorage(props.nums.page, props.nums.group)
  //   console.log(props.nums.group + '=useEffect CardLis getWordAPI=' + props.nums.page);
  //   usersAPI.getUserList()
  //     .then((res) => {
  //       setUserList([...res]);
  //       console.log(`setUserList ${res[0].wordId}`)
  //     });
  //   console.log(userList);
  // }, []);

  // const passPageToLocaleStorage = (page:number, group:number) => {
  //   localStorage.setItem('page', String(page));
  //   localStorage.setItem('group', String(group));
  //   console.log('localStorage - established');
  // };

  return (
    <div className={classes.CardListWrapper}>
      <div className={classes.CardList}>

        {/*{wordList.map((el:IWord) => {*/}
        {/*  return <Card key={el.id} oneWord={el} userList={userList}/>*/}
        {/*})}*/}
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
