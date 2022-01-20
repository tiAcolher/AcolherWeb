import { Contact } from "../model/Contact";
import client from "./client";

export const contactAPI = {
  create: (data: Partial<Contact>) => {
    return client({ method: "post", url: "/contact", data });
  },
  findById: (id: number) => {
    return client({ method: "get", url: `/contact/${id}` });
  },
  update: (data: Partial<Contact>) => {
    return client({ method: "put", url: "/contact", data });
  },
  delete: (id: number) => {
    return client({
      method: "delete",
      url: `/contact/${id}`,
    });
  },
};
