import axios from "axios";

const BASE_URL = "http://your-api-url/api/v1/users/visitor";

export const saveVisitor = async (visitorRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, visitorRequest);
    return response.data; // Assuming the server returns some confirmation or data
  } catch (error) {
    console.error("Failed to save visitor data:", error);
    throw error;
  }
};

export const showVisitor = async (visitorRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, visitorRequest);
    return response.data; // Assuming this returns the visitor count or other relevant data
  } catch (error) {
    console.error("Failed to fetch visitor data:", error);
    throw error;
  }
};
