import React, { useRef } from 'react';
import './UserForm.css'
import axios from 'axios';
import { API_URL } from '../../../constants';
import { IUserInfo } from '../../types/types';


interface IUserFormsProps {
  className:string;
  setClassName: (classString: string) => void;
}

const UsersForm:React.FC<IUserFormsProps> = ({className, setClassName}) => {
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPass = useRef<HTMLInputElement>(null);

  console.log(className);

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('inputRef.current?.value');
    console.log(inputRefName.current?.value);
    console.log(inputRefEmail.current?.value);
    console.log(inputRefPass.current?.value);

    localStorage.name = inputRefName.current?.value === null ? '': inputRefName.current?.value;
    localStorage.email = inputRefEmail.current?.value === null ? '': inputRefEmail.current?.value;
    localStorage.password = inputRefPass.current?.value === null ? '': inputRefPass.current?.value;

    try {
      const response = await axios.post<IUserInfo>(API_URL + '/users',
        {
          name: localStorage.name,
          email: localStorage.email,
          password: localStorage.password,
        });
      console.log(response.data);
      localStorage.token = response.data.token;
      localStorage.userID = response.data.userId;
    } catch ( e ) {
      alert(e);
    }
  };

  const singIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Вход getSignIn');
    try {
      const response = await axios.post<IUserInfo>(API_URL + '/signin',
        {
        email: localStorage.email,
        password: localStorage.password,
      });
      console.log(response.data);
      localStorage.userID = response.data.userId;
      localStorage.token = response.data.token;
      console.log(response.data.userId);
    } catch ( e ) {
      alert(e);
    }
  }

  const clearStorage = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.clear();
  }

  const closeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClassName('UserForm');
    console.log('classNameForm*******', setClassName);
  }

  return (
    <form className={className}>
      <div className='inputs'>
        <input ref={inputRefName} type='text' placeholder="User's name"/>
        <input ref={inputRefEmail} type='text' placeholder="User's email"/>
        <input ref={inputRefPass} type='text' placeholder="User's password"/>
        <div className="registration_buttons">
          <button type='button' onClick={clickHandler}>Регистрация</button>
          <button type='button' onClick={singIn}>Sign In</button>
          <button type='button' onClick={clearStorage}>Sign out</button>
          <button type='button' onClick={closeForm}>Close form</button>
        </div>

      </div>
    </form>
  );
};

export default UsersForm;