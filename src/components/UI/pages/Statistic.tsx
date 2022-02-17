import React from 'react';
import Header from './header';
import Footer from './footer';

const Statistic:React.FC = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="main">
          <h1>Statistic</h1>
        </div>
        <Footer />
      </div>

  );
};

export default Statistic;