import React from 'react';
import './EbookFooter.css';
import classes from './EbookFooter.module.css'
import HeaderIcons from '../header-icons/HeaderIcons';
import Pagination from './Pagination';
import DropUp from './DropUp';

const EbookFooter:React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container__down">
        <HeaderIcons />
        <Pagination />
        <DropUp />
      </div>
    </footer>
  );
};

export default EbookFooter;