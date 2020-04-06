/* eslint-disable no-shadow */
import axios from "axios";
import { parseCookies } from "nookies";
import getFileFormData from "-/utils/getFileFormData";
import dataURItoBlob from "-/utils/dataURItoBlob";

export const api = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

interface RegisterData {
  email: string;
  name: string;
  zap: string;
  password: string;
  iconId?: number;
  postId?: number;
  productType?: string;
  type: "deliveryman" | "trader";
}

interface LoginData {
  email: string;
  password: string;
}

interface PutData extends RegisterData {}

interface ProductData {
  id?: number;
  name: string;
  price: number;
}

const bearer = (ssrToken?: string) => {
  const { token } = parseCookies();
  return {
    headers: {
      Authorization: `Bearer ${ssrToken || token}`
    }
  };
};

export const ServerUser = {
  register: (data: RegisterData) => api.post("/users", data),
  login: (data: LoginData) => api.post<{ token: string }>("/sessions", data),
  get: token => api.get("/users", bearer(token)),
  update: data => api.put("/users", data, bearer())
};

export const ServerProduct = {
  create: (data: ProductData) =>
    api.post<ProductData>("/products", data, bearer()),
  update: (data: { products: ProductData[] }) =>
    api.put("/products", data, bearer()),
  delete: (id: number) => api.delete(`/products/${id}`, bearer())
};

export const ServerFile = {
  upload: async (file: File) =>
    api.post("/files", getFileFormData(file), bearer())
};
