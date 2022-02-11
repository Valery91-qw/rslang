import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import MyButton, { CardVariant } from '../buttons/MyButton';
// import useFetchUser from '../../requests/useFetchUser';
import HeaderIcons from './header-icons/HeaderIcons';
import axios from 'axios';
import { IUserID } from '../../types/types';
import { API_URL, TOKEN } from '../../../constants';
import useFetchUser from '../../requests/useFetchUser';
import { controlClick } from '../../../App';

const header:React.FC = () => {
  const [userID, setUserID] = useState<IUserID>();
  const userIDg = {id: '6201778e84b3ea001594d79c', name: '', email: ''};

  const clickHandler0 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('MouseEvent');
  };

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('inputRef.current?.value');
    await fetchUserApp00();
  }

  async function fetchUserApp00() {
    try {
      const response = await axios.get<IUserID>((API_URL + '/users/' + userIDg.id),
        {
          headers: {
            'Authorization': `Bearer ` +  TOKEN,
            'Accept': 'application/json',
          }
        });
      setUserID(response.data);
      console.log(response.data);
    } catch ( error ) {
      alert(error);
    }
  }

  return (
    <div className='header'>
      <HeaderIcons />
      <div className='header-navigation'>

        <div className="header-navigation__item">
          <Link to="/">Main</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="authorize">Authorize</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="ebook">Ebook</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="games">Games</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="statistic">Statistic</Link>
        </div>

      </div>
      <div className='home-buttons'>
        {/*<MyButton myClick={clickHandler} width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>*/}
        <button onClick={clickHandler}>Войти</button>
      </div>

    </div>
  );
};

export default header;