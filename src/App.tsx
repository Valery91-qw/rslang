import React from 'react';
import './normalize.css';
import './App.css';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
