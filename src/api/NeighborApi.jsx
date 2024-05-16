import axios from "axios";

const BASE_URL = "http://your-api-url/api/v1/users/neighbors";

export const showNeighbor = async (userBlogId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userBlogId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch neighbors:", error);
    throw error;
  }
};

export const acceptNeighborRequest = async (userBlogId, requestId) => {
  try {
    await axios.post(`${BASE_URL}/request${requestId}/${userBlogId}`);
  } catch (error) {
    console.error("Failed to accept neighbor request:", error);
    throw error;
  }
};

export const addNeighbor = async (userBlogId, requestId) => {
  try {
    await axios.put(`${BASE_URL}/update${requestId}/${userBlogId}`);
  } catch (error) {
    console.error("Failed to add neighbor:", error);
    throw error;
  }
};

export const deleteNeighbor = async (userBlogId, requestId) => {
  try {
    await axios.put(`${BASE_URL}/delete${requestId}/${userBlogId}`);
  } catch (error) {
    console.error("Failed to delete neighbor:", error);
    throw error;
  }
};
