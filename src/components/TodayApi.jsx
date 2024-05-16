import axios from "axios";

const API_URL = "http://your-api-url/";

export const saveToday = async (todayRequest) => {
  try {
    const response = await axios.post(API_URL, todayRequest);
    return response.data;
  } catch (error) {
    console.error("Failed to save data:", error);
    throw error;
  }
};

export const showToday = async (todayRequest) => {
  try {
    const response = await axios.get(API_URL, { params: todayRequest });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
