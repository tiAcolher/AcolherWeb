import { URL_BASE } from "../constants";
import { Contact } from "../model/Contact";
import client from "./client";

export const contactAPI = {
  create: (data: Partial<Contact>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/contact", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/contact/${id}` });
  },
  update: (data: Partial<Contact>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/contact", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/contact/${id}` });
  },
};
