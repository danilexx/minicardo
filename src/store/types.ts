import { Action } from "easy-peasy";

export interface UserModel {
  isLogged: boolean;
  token: string | null;
  id: number | null;
  username: string;
  type: "deliveryman" | "trader";
  login: Action<UserModel, { token: string }>;
  logout: Action<UserModel>;
}

export interface StoreModel {
  user: UserModel;
}
