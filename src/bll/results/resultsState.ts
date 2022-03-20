export const resultsState: IResultsState = {
  statistic: [],
};

export interface IResultsState {
  statistic: Array<IMatchesWord>
}

export interface IMatchesWord {
  word: string,
  translate: string,
  isGuessed: boolean,
  id: string,
}
