import React, { useEffect, useState } from 'react';
import './EbookFooter.css';
import classes from './EbookFooter.module.css'
import HeaderIcons from '../header-icons/HeaderIcons';
import Pagination from './Pagination';
import DropUp from './DropUp';
import { IPage } from '../../../../types/types';
import { Link } from 'react-router-dom';

interface IProps {
  getPageFromFooter: (nums:IPage) => void;
}

const EbookFooter:React.FC<IProps> = ({getPageFromFooter}) => {
  const [groupFromFooter, setGroupFromFooter] = useState<number>();
  const [pageFromFooter, setPageFromFooter] = useState<number>();

  useEffect(() => {
    const nums:IPage = {
      group: typeof groupFromFooter !== 'undefined'? groupFromFooter: Number(localStorage.getItem('group')),
      page: typeof pageFromFooter !== 'undefined'? pageFromFooter: Number(localStorage.getItem('page')),
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
        <button
          className='btn btn-danger'
        >
          <div className={classes.ButtonLinkWrapper}>
            <Link className={'text-link ' + classes.ButtonLink} to="/rslang/learning-book">Словарь</Link>
          </div>
        </button>
        <Pagination getPage={getPageFunc} />
        <DropUp getGroup={getGroupFunc}/>
      </div>
    </footer>
  );
};

export default EbookFooter;
