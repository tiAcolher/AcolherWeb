import { FamilyData } from "../model/FamilyData";
import client from "./client";

export const familyDataAPI = {
  create: (data: Partial<FamilyData>) => {
    return client({ method: "post", url: "/familyData", data });
  },
  read: (id: number) => {
    return client({
      method: "get",
      url: `/familyData/${id}`,
    });
  },
  update: (data: Partial<FamilyData>) => {
    return client({
      method: "put",
      url: "/familyData",
      data,
    });
  },
  delete: (id: number) => {
    return client({
      method: "delete",
      url: `/familyData/${id}`,
    });
  },
};
