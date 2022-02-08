import React from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import Sprint from './components/UI/pages/games/sprint/Sprint';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <Sprint />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
