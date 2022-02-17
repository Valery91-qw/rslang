import { resultsState, ResultsStateType } from './resultsState';
import { ResultsActions } from './resultsActions';
import resultsReducerConstants from './resultsReducer.constants';

export default function resultsReducer(
  state = resultsState, action: ResultsActions,
): ResultsStateType {
  switch (action.type) {
    case resultsReducerConstants.add_word_to_statistic:
      return { ...state, statistic: [...state.statistic, action.word] };
    case resultsReducerConstants.remove_results:
      return { ...state, statistic: [] };
    default: return state;
  }
}
