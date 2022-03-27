import { combineReducers, createStore } from 'redux';
import resultsReducer from './results/resultsReducer';
import complexWordsReducer from "./complex-words/complexWordsReducer";

const rootState = combineReducers({
  results: resultsReducer,
  complexWords: complexWordsReducer,
});

const store = createStore(rootState);

export type RootStoreType = ReturnType<typeof rootState>;

export default store;
