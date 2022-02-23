import axios from 'axios';
import { IWord } from '../../types/types';
import { API_URL } from '../../constants';

const instance = axios.create({
  baseURL: API_URL,
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
