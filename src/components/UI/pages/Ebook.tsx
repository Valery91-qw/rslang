import React from 'react';
import CardsList from '../card/CardsList';
import classes from './css/Ebooks.module.css';
import EbookFooter from './EbookFooter/EbookFooter';


const Ebook = () => {
  return (
    <div className={classes.EbookWrapper}>
      <div className={classes.Ebooks}>
        <CardsList />
      </div>
      <EbookFooter />
    </div>
  );
};

export default Ebook;