import { action } from "easy-peasy";
import { destroyCookie } from "nookies";
import jwt from "jsonwebtoken";
import { UserModel } from "../types";

const user: UserModel = {
  isLogged: false,
  token: null,
  id: null,
  username: "",
  type: "deliveryman",
  login: action((state, payload) => {
    const decoded = jwt.decode(payload.token) as any;
    const { id, name, type } = decoded;
    state.isLogged = true;
    state.id = id;
    state.token = payload.token;
    state.username = name;
    state.type = type;
  }),
  logout: action((state, payload) => {
    state.isLogged = false;
    state.id = null;
    state.username = "";
    state.type = "deliveryman";
    destroyCookie(null, "token");
  })
};

export default user;
