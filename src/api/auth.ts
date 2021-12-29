import { Credentials } from "../model/Credentials";
import client from "./client";

export const authAPI = {
  login: async (data: Credentials) => {
    return client({ method: "post", url: "/login", data });
  },
};
