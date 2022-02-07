import React from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import MyButton from './components/UI/buttons/MyButton';
import Cards from './components/UI/Cards';
// import funcFetchUser from './components/requests/funcFetchUser';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <h1>Hello World</h1>
          <MyButton>Войти</MyButton>
          <Cards width='100px' height='100px'>
            <button>Кнопка</button>
          </Cards>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
