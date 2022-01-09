import { Address } from "../model/Address";
import client from "./client";

export const addressAPI = {
  create: (data: Partial<Address>) => {
    return client({
      method: "post",
      url: "/address",
      data,
    });
  },
  findById: (id: number) => {
    return client({
      method: "get",
      url: `/address/${id}`,
    });
  },
  findAll: () => {
    return client({
      method: "get",
      url: `/address`,
    });
  },
  update: (data: Partial<Address>) => {
    return client({
      method: "put",
      url: "/address",
      data,
    });
  },
  delete: (id: number) => {
    return client({
      method: "delete",
      url: `/address/${id}`,
    });
  },
};
