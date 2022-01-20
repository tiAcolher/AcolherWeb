import { Health } from "../model/Health";
import client from "./client";

export const healthAPI = {
  create: (data: Partial<Health>) => {
    return client({ method: "post", url: "/health", data });
  },
  findById: (id: number) => {
    return client({ method: "get", url: `/health/${id}` });
  },
  update: (data: Partial<Health>) => {
    return client({ method: "put", url: "/health", data });
  },
  delete: (id: number) => {
    return client({ method: "delete", url: `/health/${id}` });
  },
};
