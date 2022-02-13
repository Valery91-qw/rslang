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
  "message": string;
  "token": string;
  "refreshToken": string;
  "userId": string;
  "name": string;
}