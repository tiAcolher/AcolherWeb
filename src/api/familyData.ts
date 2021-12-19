import { URL_BASE } from "../constants";
import { FamilyData } from "../model/FamilyData";
import client from "./client";

export const familyDataAPI = {
  create: (data: Partial<FamilyData>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/familyData", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/familyData/${id}` });
  },
  update: (data: Partial<FamilyData>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/familyData", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/familyData/${id}` });
  },
};
