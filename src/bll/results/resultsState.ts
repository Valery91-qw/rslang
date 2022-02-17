export const resultsState: ResultsStateType = {
  statistic: [],
};

export type ResultsStateType = {
  statistic: Array<MatchesWord>
};

export type MatchesWord = {
  word: string,
  translate: string,
  isGuessed: boolean,
  id: string,
};
