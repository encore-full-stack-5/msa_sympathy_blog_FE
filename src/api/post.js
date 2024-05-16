import { api_post } from "../config/network";

export const newPost = async (data) => {
  const res = await api_post("/api/v1/posts", "post", data);
  return res;
};
