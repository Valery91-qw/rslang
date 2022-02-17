import { MatchesWord } from './resultState';

export const addWordToResult = (word: MatchesWord) => ({ type: 'addWordToStatistic', word } as const);
export const removeResults = () => ({ type: 'removeResults' } as const);

export type ResultsActions = ReturnType<typeof addWordToResult> | ReturnType<typeof removeResults>;
