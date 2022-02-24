import React, { useEffect, useState } from 'react';
import { IPage } from '../../../../types/types';
import classes from '../EbookFooter/EbookFooter.module.css';
import HeaderIcons from '../header-icons/HeaderIcons';
import { Link } from 'react-router-dom';
import Pagination from '../EbookFooter/Pagination';
import DropUp from '../EbookFooter/DropUp';

interface IProps {
  getPageFromFooter: (nums:IPage) => void;
}

const LearningBookFooter:React.FC<IProps> = ({getPageFromFooter}) => {
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
        <button
          className='btn btn-danger'
        >
          <div className={classes.ButtonLinkWrapper}>
            <Link className={'text-link ' + classes.ButtonLink} to="/rslang/ebook">Учебник</Link>
          </div>
        </button>
        <Pagination getPage={getPageFunc} />
        <DropUp getGroup={getGroupFunc}/>
      </div>
    </footer>
  );
};

export default LearningBookFooter;