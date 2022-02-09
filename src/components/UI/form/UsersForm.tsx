import React from 'react';
import './UserForm.css'
import MyButton from "../buttons/MyButton";
// import { Simulate } from 'react-dom/test-utils';
// import click = Simulate.click;

const UsersForm = () => {
  return (
    <div className='UserForm'>
      <form>
        <input type='text' placeholder="User's name"/>
        <input type='text' placeholder="User's email"/>
        <input type='text' placeholder="User's password"/>
        <MyButton onClick={() => {console.log('click33')}}>Отправить</MyButton>
      </form>
    </div>
  );
};

export default UsersForm;