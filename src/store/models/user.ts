import { action } from "easy-peasy";
import { UserModel } from "../types";

const user: UserModel = {
  isLogged: false,
  token: null,
  id: null,
  username: "",
  login: action((state, payload) => {
    state.isLogged = true;
    state.id = 1;
    state.username = "anderson";
  }),
  logout: action((state, payload) => {
    state.isLogged = false;
    state.id = null;
    state.username = "";
  })
};

export default user;
