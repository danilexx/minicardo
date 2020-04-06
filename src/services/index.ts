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

interface Post {
  name: string;
  post?: {
    url: string;
  };
  icon?: {
    url: string;
  };
}

interface PostsGetData {
  users: Post[];
  total: number;
  currentPage: number;
  pages: number;
}

export interface User {
  id: number;
  name: string;
  productType: string;
  post?: {
    url: string;
  };
  icon?: {
    url: string;
  };
  zap: string;
  address: {
    cep: string;
    street: string;
    district: string;
    city: string;
    state: string;
  };
  products: ProductData[];
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

export const ServerPosts = {
  get: ({ searchParams, page = 1 }: { searchParams: string; page: number }) =>
    api.get<PostsGetData>(
      `/posts?page=${page}&searchParams=${searchParams}&type=trader&=itemsPerPage=9`
    ),
  getOne: id => api.get<User>(`/posts/${id}`)
};
export const ServerDeliverymans = {
  get: ({ searchParams, page = 1 }: { searchParams: string; page: number }) =>
    api.get<PostsGetData>(
      `/posts?page=${page}&searchParams=${searchParams}&type=deliveryman&=itemsPerPage=9`
    ),
  getOne: id => api.get<User>(`/posts/${id}`)
};
export const ServerTrendingPosts = {
  get: () => api.get<Post[]>(`/trendingUsers?&type=trader`)
};
export const ServerTrendingDeliverymans = {
  get: () => api.get<Post[]>(`/trendingUsers?&type=deliveryman`)
};
