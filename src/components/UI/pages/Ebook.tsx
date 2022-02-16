import React from 'react';
import CardsList from '../card/CardsList';
import classes from './css/Ebooks.module.css';


const Ebook = () => {
  return (
    <div className={classes.Ebooks}>
      <CardsList />
    </div>
  );
};

export default Ebook;