import { Action } from "easy-peasy";

export interface UserModel {
  isLogged: boolean;
  token: string | null;
  id: number | null;
  username: string;
  login: Action<UserModel>;
  logout: Action<UserModel>;
}

export interface StoreModel {
  user: UserModel;
}
