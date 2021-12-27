import { URL_BASE } from "../constants";
import client from "./client";

export const authAPI = {
  login: async (username: string, password: string) => {
    client({
      method: "post",
      baseURL: URL_BASE,
      url: "/login",
      data: JSON.stringify({ username, password }),
    });
  },
};
