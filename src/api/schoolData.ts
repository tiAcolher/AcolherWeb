import { URL_BASE } from "../constants";
import { SchoolData } from "../model/SchoolData";
import client from "./client";

export const schoolDataAPI = {
  create: (data: Partial<SchoolData>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/schoolData", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/schoolData/${id}` });
  },
  update: (data: Partial<SchoolData>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/schoolData", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/schoolData/${id}` });
  },
};
