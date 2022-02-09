import React, { useEffect, useRef, useState } from 'react';
import './UserForm.css'
import MyButton, { CardVariant } from '../buttons/MyButton';
import axios from 'axios';
import { API_URL } from '../../../constants';
import { IUser, IUserInfo } from '../../types/types';

// import { Simulate } from 'react-dom/test-utils';
// import click = Simulate.click;

const UsersForm:React.FC = () => {
  const [user, setUserID] = useState<IUser>();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefMail = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);

  async function getSignIn () {
    try {
      const response = await axios.post<IUserInfo>(API_URL + '/signin', {
        email: 'igor@gmail.com',
        password: 'string123456',
      });
      setUserInfo(response.data);
      console.log(response.data);
      console.log(user);
    } catch ( e ) {
      alert(e);
    }
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(user?.email);
  }

  // useEffect(() => {
  //   console.log(user);
  // },[]);

  return (
    <div className='UserForm'>
      <form>
        <input ref={inputRefName} type='text' placeholder="User's name"/>
        <input ref={inputRefMail} type='text' placeholder="User's email"/>
        <input ref={inputRefPassword} type='text' placeholder="User's password"/>
        <MyButton onClick={ getSignIn } width='14vh' height='4vh' variant={CardVariant.squared}>Отправить</MyButton>
      </form>
    </div>
  );
};

export default UsersForm;