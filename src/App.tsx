import React, {useEffect} from 'react';
import './normalize.css';
import './App.css';
import Router from './router/Router';
import statisticsAPI from "./dal/wordAPI/statisticsAPI";

const App: React.FC = () => {
    useEffect(() => {
        statisticsAPI.getStatistics()
    }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
