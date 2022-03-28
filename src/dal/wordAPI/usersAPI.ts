import axios from 'axios';
import {IAggregatedWords, IAggregatedWord, IUserInfo, IUserWord} from '../../types/types';
import { API_URL } from '../../constants';

const instance = axios.create({
  baseURL: API_URL,
});

const usersAPI = {
  getUserList(): Promise<Array<IUserWord>> {
    const userIDs = localStorage.getItem('userID')!;
    let userToken = '';
    userToken = localStorage.getItem('token')!;

    let PathWords = '';
    PathWords = PathWords.concat(
      '/users/', userIDs, '/words',
    );
    const configReq = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    return instance.get<Array<IUserWord>>(PathWords, configReq)
      .then((res) => {
        const result = res.data;
        console.log('result is!');
        return result;
      })
      .catch((err) => err.message);
  },
  getLearningWord(): Promise<Array<IAggregatedWord>> {
    const userIDs = localStorage.getItem('userID')!;
    let userToken = '';
    userToken = localStorage.getItem('token')!;
    const configReq = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    let PathWords = '';
    PathWords = PathWords.concat(
      '/users/', userIDs,
      '/aggregatedWords?page=0&wordsPerPage=4000&filter=',
      '%7B%22userWord.difficulty%22%3A%22learning%22%7D'
    );
    return instance.get<Array<IAggregatedWords>>(PathWords, configReq)
      .then((res) => {
        const result = res.data[0].paginatedResults;
        return result;
      })
      .catch((err) => err.message);
  },
  singIn() {
    console.log('Вход getSignIn');
    let stringAPI = '';
    stringAPI = stringAPI.concat(API_URL, '/signin');
    return instance.post<IUserInfo>(stringAPI,
      {
        email: localStorage.email,
        password: localStorage.password,
      }).then((response) => {
      console.log(response.data);
      localStorage.userID = response.data.userId;
      localStorage.token = response.data.token;
      console.log(response.data.userId);
    })
      .catch((err) => err.message);
  },
};

export default usersAPI;
