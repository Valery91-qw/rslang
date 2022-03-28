export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IUserID {
  id:string;
  name: string;
  email: string;
}
export interface IUserInfo {
  'message': string;
  'token': string;
  'refreshToken': string;
  'userId': string;
  'name': string;
}
export interface IWord extends IBodyWord {
  id:string;
}
export interface IBodyWord {
  group:number;
  page:number;
  word:string;
  image:string;
  audio:string;
  audioMeaning:string;
  audioExample:string;
  textMeaning:string;
  textExample:string;
  transcription:string;
  wordTranslate:string;
  textMeaningTranslate:string;
  textExampleTranslate:string;
}

export interface IPage {
  page: number;
  group: number;
}
export interface IUserWord {
  id: string;
  wordId: string;
  difficulty: string;
  optional: IOptionWords;
}
export interface IOptionWords {
  optionKey: string;
}

export interface IAggregatedWords extends IAggregatedWord{
  paginatedResults:Array<IAggregatedWord>;
  totalCount:Array<ICountWords>;
}
export interface ICountWords {
  count:number;
}

export interface IAggregatedWord extends IBodyWord {
  _id: string;
  userWord: {
    difficulty: string;
  }
}
