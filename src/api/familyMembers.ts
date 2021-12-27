import { URL_BASE } from "../constants";
import { FamilyMember } from "../model/FamilyMember";
import client from "./client";

export const familyMembersAPI = {
  create: (data: Partial<FamilyMember>) => {
    client({ method: "post", baseURL: URL_BASE, url: "/familyMember", data });
  },
  read: (id: number) => {
    client({ method: "get", baseURL: URL_BASE, url: `/familyMember/${id}` });
  },
  update: (data: Partial<FamilyMember>) => {
    client({ method: "put", baseURL: URL_BASE, url: "/familyMember", data });
  },
  delete: (id: number) => {
    client({ method: "delete", baseURL: URL_BASE, url: `/familyMember/${id}` });
  },
};
