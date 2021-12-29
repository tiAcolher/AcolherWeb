import { URL_BASE } from "../constants";
import { FamilyMember } from "../model/FamilyMember";
import client from "./client";

export const familyMembersAPI = {
  create: (data: Partial<FamilyMember>) => {
    return client({ method: "post", url: "/familyMember", data });
  },
  read: (id: number) => {
    return client({
      method: "get",
      url: `/familyMember/${id}`,
    });
  },
  update: (data: Partial<FamilyMember>) => {
    return client({ method: "put", url: "/familyMember", data });
  },
  delete: (id: number) => {
    return client({ method: "delete", url: `/familyMember/${id}` });
  },
};
