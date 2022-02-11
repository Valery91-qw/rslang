import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IUser, IUserID } from '../types/types';


// const useFetchUser = async (e:React.MouseEvent<HTMLButtonElement>) => {

function  useFetchUser() {
  // const [user, setUser] = useState<IUser>();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDE3NzhlODRiM2VhMDAxNTk0ZDc5YyIsImlhdCI6MTY0NDMxNTU3MiwiZXhwIjoxNjQ0MzI5OTcyfQ.ujQjdRO3Jhc6oL0dhnKgRa1fyHnLgY_9kd1-SyZJGMw';
  const [userID, setUserID] = useState<IUserID>();
  const userIDg = {id: '6201778e84b3ea001594d79c', name: '', email: ''};
  // setUserID(userIDg);

  console.log('userID');
  // useEffect(() => {
      // axios.post<IUserID>(('https://react-learnwords-example.herokuapp.com/users/' + userIDg.id),
      //   {
      //     headers: {
      //       'Authorization': (`Bearer ` + token),
      //       'Accept': 'application/json',
      //     },
      //   }).then( (response) => setUserID(response.data));
      // setUserID(response.data);
      // console.log(response.data);
      // result = response.data;
      // (response.data === undefined)? result = {id : '1', email : '2', password :'3'}: result = response.data;
    // } catch (error) {
    //   alert(error);
    // }

  // },[]);


  // }


  return;
}

export default useFetchUser;
