import axios from 'axios';
import { IWord } from '../../types/types';

const instance = axios.create({
  baseURL: 'https://rslang03.herokuapp.com',
});

const wordAPI = {
  getWords(group = 0, page = 0): Promise<Array<IWord>> {
    return instance.get<Array<IWord>>('/words', {
      params: {
        group,
        page,
      },
    })
      .then((res) => res.data)
      .catch((err) => err.message);
  },
};

export default wordAPI;
