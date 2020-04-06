import { Action } from "easy-peasy";

export interface UserModel {
  isLogged: boolean;
  token: string | null;
  id: number | null;
  username: string;
  icon: string;
  type: "deliveryman" | "trader" | null;
  login: Action<UserModel, { token: string }>;
  logout: Action<UserModel>;
}

export interface StoreModel {
  user: UserModel;
}
