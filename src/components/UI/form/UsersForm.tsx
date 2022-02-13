import React, { useEffect, useRef, useState } from 'react';
import './UserForm.css'
// import MyButton, { CardVariant } from '../buttons/MyButton';
import axios from 'axios';
import { API_URL } from '../../../constants';
import { IUser, IUserInfo } from '../../types/types';
// import { controlClick } from '../../../App';
// import useFetchUser from '../../requests/useFetchUser';
// import { Simulate } from 'react-dom/test-utils';
// import click = Simulate.click;

interface IUserFormsProps {
  className:string;
  setClassName: (classString: string) => void;
}

const UsersForm:React.FC<IUserFormsProps> = ({className, setClassName}) => {
  // const [user, setUserID] = useState<IUser>();
  // const [userInfo, setUserInfo] = useState<IUserInfo>();
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPass = useRef<HTMLInputElement>(null);

  // const [classNameForm, setClassNameForm] = useState<string>();
  // useState()
  // setClassName((className));
  // useEffect(() => {
    // setClassNameForm(className);
  //   console.log(className, 'useEffect');
  // }, [className]);
  // className += ' active';

  console.log(className);
  // const positionForm = 'UserForm';

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('inputRef.current?.value');
    console.log(inputRefName.current?.value);
    console.log(inputRefEmail.current?.value);
    console.log(inputRefPass.current?.value);

    localStorage.name = inputRefName.current?.value === null ? '': inputRefName.current?.value,
    localStorage.email = inputRefEmail.current?.value === null ? '': inputRefEmail.current?.value,
    localStorage.password = inputRefPass.current?.value === null ? '': inputRefPass.current?.value;

    try {
      const response = await axios.post<IUserInfo>(API_URL + '/users',
        {
          name: localStorage.name,
          email: localStorage.email,
          password: localStorage.password,
        });
      // setUserInfo(response.data);
      console.log(response.data);
      // localStorage.name = response.data.name;
      localStorage.token = response.data.token;
      localStorage.userID = response.data.userId;
      // console.log(user);
    } catch ( e ) {
      alert(e);
    }
  };

  const singIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Вход getSignIn');
    // localStorage.password = 'string123456';
    try {
      const response = await axios.post<IUserInfo>(API_URL + '/signin',
        {
        email: localStorage.email,
        password: localStorage.password,
      });
      // setUserInfo(response.data);
      console.log(response.data);
      localStorage.userID = response.data.userId;
      localStorage.token = response.data.token;
      // localStorage.password = response.data.password;
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
  // const getSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('Вход getSignIn');
  //   try {
  //     const response = await axios.post<IUserInfo>(API_URL + '/signin', {
  //       email: 'igor@gmail.com',
  //       password: 'string123456',
  //     });
  //     // setUserInfo(response.data);
  //     console.log(response.data);
  //     localStorage.token = response.data.token;
  //     // console.log(user);
  //   } catch ( e ) {
  //     alert(e);
  //   }
  // }

  // async function controlClick() {
  //   console.log('controlClick');
  // }

  // const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(user?.email);
  // }

  // useEffect(() => {
  //   console.log(user);
  // },[]);

  return (
    <form className={className}>
      <div className='inputs'>
        <input ref={inputRefName} type='text' placeholder="User's name"/>
        <input ref={inputRefEmail} type='text' placeholder="User's email"/>
        <input ref={inputRefPass} type='text' placeholder="User's password"/>
        {/*<MyButton myClick={ () => useFetchUser } width='14vh' height='5vh' variant={CardVariant.squared}>Отправить</MyButton>*/}
        {/*<button onClick={clickHandler}>Отправить</button>*/}
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