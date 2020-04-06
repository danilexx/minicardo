import { action } from "easy-peasy";
import { destroyCookie } from "nookies";
import jwt from "jsonwebtoken";
import { UserModel } from "../types";

const user: UserModel = {
  isLogged: false,
  token: null,
  id: null,
  username: "",
  icon: "",
  type: null,
  login: action((state, payload) => {
    const decoded = jwt.decode(payload.token) as any;
    const { id, name, type, icon } = decoded;
    state.isLogged = true;
    state.id = id;
    state.icon = icon;
    state.token = payload.token;
    state.username = name;
    state.type = type;
  }),
  logout: action(state => {
    state.isLogged = false;
    state.id = null;
    state.username = "";
    state.icon = "";
    state.type = null;
    destroyCookie(null, "token");
  })
};

export default user;
