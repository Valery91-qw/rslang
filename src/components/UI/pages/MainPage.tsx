import React from 'react';
import Footer from './footer';
import './css/MainPage.css';
import Header from './Header';

const MainPage:React.FC = () => {
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
