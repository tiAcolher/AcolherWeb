import { URL_BASE } from "../constants";
import { Participant } from "../model/Participant";
import client from "./client";

export const participantAPI = {
  create: (data: Partial<Participant>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/participant", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/participant/${id}` });
  },
  update: (data: Partial<Participant>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/participant", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/participant/${id}` });
  },
};
