import React from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <h1>Hello World</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
