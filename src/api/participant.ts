import { Participant } from "../model/Participant";
import client from "./client";

export const participantAPI = {
  create: (data: Partial<Participant>) => {
    return client({
      method: "post",
      url: "/participant",
      data,
    });
  },
  findById: (id: number) => {
    return client({
      method: "get",
      url: `/participant/${id}`,
    });
  },
  findAll: () => {
    return client({
      method: "get",
      url: `/participant`,
    });
  },
  update: (data: Partial<Participant>) => {
    return client({
      method: "put",
      url: "/participant",
      data,
    });
  },
  delete: (id: number) => {
    return client({
      method: "delete",
      url: `/participant/${id}`,
    });
  },
};
