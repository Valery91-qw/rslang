import { combineReducers, createStore } from 'redux';
import resultsReducer from './results/resultsReducer';
import gameReducer from "./game/gameReducer";

const rootState = combineReducers({
  results: resultsReducer,
  game: gameReducer,
});

const store = createStore(rootState);

export type RootStoreType = ReturnType<typeof rootState>;

export default store;
