import axios from 'axios';
import { IUserInfo, IUserWord } from '../../types/types';
import { API_URL } from '../../constants';

const instance = axios.create({
  baseURL: API_URL,
});

const usersAPI = {
  getUserList(): Promise<Array<IUserWord[]>> {
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

    // const bodyParameters = {
    //   key: "value"
    // };
    return instance.get<Array<IUserWord>>(PathWords, configReq)
      .then((res) => {
        const result = res.data[0].wordId;
        console.log(result);
      })
      .catch((err) => err.message);
  },
  getUserWord(wordId:string): Promise<Array<IUserWord[]>> {
    const userIDs = localStorage.getItem('userID')!;
    let userToken = '';
    userToken = localStorage.getItem('token')!;
    let PathWords = '';
    PathWords = PathWords.concat(
      '/users/', userIDs, '/words/', wordId,
    );
    const configReq = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    const bodyParameters = {
      difficulty: 'learning',
      optional: {},
    };
    return instance.post<IUserWord>(PathWords, bodyParameters, configReq)
      .then((res) => {
        const result = res.data.wordId;
        console.log(result);
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
