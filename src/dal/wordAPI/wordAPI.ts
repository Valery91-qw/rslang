import axios from 'axios';
import { WordAPIType } from './wordAPI.type';

const instance = axios.create({
  baseURL: 'https://react-learnwords-example.herokuapp.com',
});

const wordAPI = {
  getWords(group = 0, page = 0): Promise<Array<WordAPIType>> {
    return instance.get<Array<WordAPIType>>('/words', {
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
