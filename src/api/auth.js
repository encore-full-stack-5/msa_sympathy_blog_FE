import { api, api_user } from "../config/network";

export const signIn = async (data) => {
  const res = await api("/api/v1/auth/signIn", "post", data);
  return res;
};

export const home = async (data) => {
  const res = await api_user("/api/v1/auth/user/home", "get", data);
  return res;
};
