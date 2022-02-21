import React, {useEffect} from 'react';
import Footer from './footer';
import Header from './Header';
import './css/MainPage.css'
import wordAPI from '../../../dal/wordAPI/wordAPI';

const MainPage:React.FC = () => {
  useEffect(() => {
    wordAPI.getWords();
    console.log('oneWord - It works');
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <h1>Hello World</h1>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
