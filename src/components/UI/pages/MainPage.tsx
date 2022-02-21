import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import './css/MainPage.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';

const MainPage:React.FC = () => {
  useEffect(() => {
    wordAPI.getWords();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <h1>Hello World, Мир, удивись!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
