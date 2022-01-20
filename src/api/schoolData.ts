import { SchoolData } from "../model/SchoolData";
import client from "./client";

export const schoolDataAPI = {
  create: (data: Partial<SchoolData>) => {
    return client({ method: "post", url: "/schoolData", data });
  },
  findById: (id: number) => {
    return client({
      method: "get",
      url: `/schoolData/${id}`,
    });
  },
  update: (data: Partial<SchoolData>) => {
    return client({
      method: "put",
      url: "/schoolData",
      data,
    });
  },
  delete: (id: number) => {
    return client({
      method: "delete",
      url: `/schoolData/${id}`,
    });
  },
};
