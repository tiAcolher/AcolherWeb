import { URL_BASE } from "../constants";
import { Health } from "../model/Health";
import client from "./client";

export const healthAPI = {
  create: (data: Partial<Health>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/health", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/health/${id}` });
  },
  update: (data: Partial<Health>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/health", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/health/${id}` });
  },
};
