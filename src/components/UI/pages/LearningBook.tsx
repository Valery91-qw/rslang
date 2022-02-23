import React, { useEffect, useState } from 'react';
import './css/LearningBook.css';
import classes from './css/LearningBook.module.css';
import { IPage } from '../../../types/types';
import LearningBookFooter from './LearningFooter/LearningBookFooter';
import CardListLearning from '../card/CardListLearning';

const LearningBook:React.FC = () => {
  const pageSetInit = {
    page: Number(localStorage.getItem('page')),
    group: Number(localStorage.getItem('group')),
  };
  const [pageSet, setPageSet] = useState<IPage>(pageSetInit);
  console.log(pageSet.group + ' Ebook - init ' + pageSet.page);

  const getPage = (nums:IPage) => {
    setPageSet(nums);
    console.log(nums.group + ' Ebook getPage ' + nums.page);
  };

  useEffect(() => {
    const pageLocal = pageSet?.page? pageSet.page: 0;

    console.log(pageSet.group + ' useEffect of Ebook ' + pageSet.page)
  },[pageSet]);
  return (
    <div className={classes.EbookWrapper}>
      <div className={classes.Ebooks}>
        {/*<h1>hhhhhhhhh</h1>*/}
        <CardListLearning nums={pageSet} />
      </div>
      <LearningBookFooter getPageFromFooter={getPage} />
    </div>
  );
};

export default LearningBook;