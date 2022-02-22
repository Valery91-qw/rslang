import axios from 'axios';
import { IWord } from '../../types/types';
import { API_URL } from '../../constants';

const instance = axios.create({
  baseURL: API_URL,
});

const learningWordAPI = {
  createUserWords(wordID:string): Promise<Array<IWord>> {
    const userIDs = localStorage.getItem('userID')!;
    let words = '';
    words = words.concat(
      '/users/', userIDs, '/words/', wordID,
    );

    return instance.post<Array<IWord>>(words)
    //   {
    //   params: {
    //     userID,
    //     words,
    //     wordID,
    //   },
    // }
    // )
      .then((res) => res.data)
      .catch((err) => err.message);
  },
};

export default learningWordAPI;
