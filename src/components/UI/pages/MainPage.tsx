import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import './css/MainPage.css'
import DropUp from './EbookFooter/DropUp';

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