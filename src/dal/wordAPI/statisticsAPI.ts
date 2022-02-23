import axios from 'axios';
import { API_URL } from '../../constants';

type ServerEntity = {
  [key : string] : {
    rightAnswers: number
    seria: number
  }
}

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const statisticsAPI = {
  getStatistics() {
    return instance
      .get<{ id: string, LearnWords: number, optional: ServerEntity }>(
      `/users/${localStorage.getItem('userID')}/statistics`,
    )
      .then((res) => {
        console.log(res);
        return res.data
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async setStatistics(game: string, optionsForGame: { seria: number , rightAnswers: number} = {seria: 0, rightAnswers: 0}) {
    let oldStatistic;
    const result = await this.getStatistics();
    if (result) oldStatistic = result.optional;
    if(oldStatistic)
    return instance.put(`/users/${localStorage.getItem('userID')}/statistics`, {
      learnedWords: 0,
      optional: {
        ...oldStatistic,
        [game]: {
          rightAnswers: optionsForGame.rightAnswers > oldStatistic[game].rightAnswers
              ? optionsForGame.rightAnswers
              : oldStatistic[game].rightAnswers,
          seria: optionsForGame.seria > oldStatistic[game].seria
              ? optionsForGame.seria
              : oldStatistic[game].seria,
        },
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
  createStatistic() {
    return instance.put(`/users/${localStorage.getItem('userID')}/statistics`, {
      learnedWords: 0,
      optional: {
        sprint: {
          seria: 0,
          rightAnswers: 0,
        },
        audioChallenge: {
          seria: 0,
          rightAnswers: 0,
        }
      },
    }).then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log(res);
    })
  }
};

export default statisticsAPI;
