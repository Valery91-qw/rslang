import { resultsState, ResultsStateType } from './resultState';
import { ResultsActions } from './resultsActions';

export default function resultsReducer(
  state = resultsState, action: ResultsActions,
): ResultsStateType {
  switch (action.type) {
    case 'addWordToStatistic':
      return { ...state, statistic: [...state.statistic, action.word] };
    case "removeResults":
      return {...state, statistic: []}
    default: return state;
  }
}
