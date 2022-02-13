import React from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import Header from './components/UI/pages/header';
import Router from './router/Router';


const App: React.FC = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="main">
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
