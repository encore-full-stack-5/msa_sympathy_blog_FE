import { api } from "../config/network";

export const signIn = async (data) => {
  const res = await api("/api/v1/auth/signIn", "post", data);
  return res;
};
