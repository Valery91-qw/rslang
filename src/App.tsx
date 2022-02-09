import React, { useEffect, useState } from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import MyButton, { CardVariant } from './components/UI/buttons/MyButton';
import Cards from './components/UI/Cards';
import { IUser, IUserID } from './components/types/types';
import axios, { Axios } from 'axios';
import useFetchUser from './components/requests/useFetchUser';
import Header from './components/UI/pages/header';

const App: React.FC = () => {
  const [userID, setUserID] = useState<IUserID>();
  // useEffect(() => {
  //   fetchUserApp();
  // },[]);

  const API_URL = 'https://react-learnwords-example.herokuapp.com';
  const userIDg = {id: '6201778e84b3ea001594d79c', name: '', email: ''};
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDE3NzhlODRiM2VhMDAxNTk0ZDc5YyIsImlhdCI6MTY0NDMzMDMxOSwiZXhwIjoxNjQ0MzQ0NzE5fQ.mlpVIp8cjQMWhRW3P5syeLWSVjvQrop9LTTfZLggjZY';
  async function fetchUserApp() {
    try {
      const response = await axios.get<IUserID>((API_URL + '/users/' + userIDg.id),
        {
          headers: {
            'Authorization': `Bearer ` +  token,
            'Accept': 'application/json',
          }
        });
      setUserID(response.data);
      // console.log(userID);
    } catch ( error ) {
      alert(error);
    }
  }
  console.log(userID);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="main">
          <h1>Hello World</h1>
          {/*<MyButton onClick={(user: string) => {console.log('click', user)}} width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>*/}
          <MyButton onClick={ useFetchUser } width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>
          {/*<MyButton onClick={ fetchUserApp } width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>*/}
          <Cards onClick={(user: string) => {console.log('click22', user)}} width='100px' height='100px'>
            <button>Кнопка</button>
          </Cards>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
