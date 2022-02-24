import { MatchesWord } from './resultsState';
import resultsReducerConstants from './resultsReducer.constants';

export const addWordToResult = (word: MatchesWord) => (
  { type: resultsReducerConstants.add_word_to_statistic, word } as const
);
export const removeResults = () => (
  { type: resultsReducerConstants.remove_results } as const
);

export type ResultsActions = ReturnType<typeof addWordToResult> | ReturnType<typeof removeResults>;
