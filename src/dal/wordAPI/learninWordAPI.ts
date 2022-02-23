import axios from 'axios';
import { IUserWord, IWord } from '../../types/types';
import { API_URL } from '../../constants';

const instance = axios.create({
  baseURL: API_URL,
});

const learningWordAPI = {
  createUserWord(wordID:string): Promise<Array<IUserWord>> {
    const userIDs = localStorage.getItem('userID')!;
    let userToken = '';
    userToken = localStorage.getItem('token')!;

    let PathWords = '';
    PathWords = PathWords.concat(
      '/users/', userIDs, '/words/', wordID,
    );
    const configReq = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    const bodyParameters = {
      // key: "value",
      difficulty: "learning",
      optional: {}
    };
    return instance.post<Array<IUserWord>>(PathWords, bodyParameters, configReq)
      .then((res) => {
        const result = res.data;
        console.log(`result is! ${result}`);
        return result;
      })
      .catch((err) => err.message);
  },
};

export default learningWordAPI;
