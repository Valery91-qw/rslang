import React from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import Header from './components/UI/pages/header';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div className="App">

        {/*<Header />*/}

          <Router />

        {/*<Footer />*/}

    </div>
  );
};

export default App;
