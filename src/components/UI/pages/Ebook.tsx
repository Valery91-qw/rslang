import React, { useEffect, useState } from 'react';
import CardsList from '../card/CardsList';
import classes from './css/Ebooks.module.css';
import EbookFooter from './EbookFooter/EbookFooter';
import { IPage } from '../../../types/types';
import Header from './Header';

const Ebook:React.FC = () => {
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
    console.log(pageSet.group + ' useEffect of Ebook ' + pageSet.page)
  },[pageSet]);

  return (
    <div className={classes.EbookWrapper}>
      <Header />
      <div className={classes.Ebooks}>
        <CardsList nums={pageSet} />
      </div>
      <EbookFooter getPageFromFooter={getPage} />
    </div>
  );
};

export default Ebook;
