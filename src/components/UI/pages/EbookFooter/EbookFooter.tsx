import React, { useEffect, useState } from 'react';
import './EbookFooter.css';
import classes from './EbookFooter.module.css'
import HeaderIcons from '../header-icons/HeaderIcons';
import Pagination from './Pagination';
import DropUp from './DropUp';
import { IPage } from '../../../../types/types';

interface IProps {
  getPageFromFooter: (nums:IPage) => void;
}

const EbookFooter:React.FC<IProps> = ({getPageFromFooter}) => {
  const [groupFromFooter, setGroupFromFooter] = useState<number>();
  const [pageFromFooter, setPageFromFooter] = useState<number>();

  useEffect(() => {
    const nums:IPage = {
      // group: groupFromFooter? groupFromFooter : Number(localStorage.getItem('group')),
      group: typeof groupFromFooter !== 'undefined'? groupFromFooter: 0,
      // page: typeof pageFromFooter !== 'undefined'? pageFromFooter: Number(localStorage.getItem('page')),
      page: typeof pageFromFooter !== 'undefined'? pageFromFooter: 0,
    };
    console.log(nums.group + ' G++P ' + nums.page + ' = getPageFromFooter')
    getPageFromFooter(nums);
  }, [groupFromFooter, pageFromFooter])

  const getGroupFunc = (num:number = 0) => {
    setGroupFromFooter(num);
    console.log(groupFromFooter);
  };

  const getPageFunc = (num:number) => {
    setPageFromFooter(num);
    console.log(num + ' =getPageFunc')
  }

  return (
    <footer className="footer">
      <div className={classes.FooterContainerDown}>
        <HeaderIcons />
        <Pagination getPage={getPageFunc} />
        <DropUp getGroup={getGroupFunc}/>
      </div>
    </footer>
  );
};

export default EbookFooter;
