import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';

export default async function funcFetchUser() {
  const [user, setUser] = useState<IUser>();
  let result;
  try {
    const response = await axios.get<IUser>('https://react-learnwords-example.herokuapp.com/doc/#/Users/get_users__id_1');
    setUser(response.data);
    console.log(user);
    console.log(response);
    result = response.data;
    (response.data === undefined)? result = {name : '1', email : '2', password :'3'}: result = response.data;
  } catch (error) {
    alert(error);
  }
  // return result;
}

useEffect(() => {
  funcFetchUser();
}, []);
