import axios from "axios";

export const api = async (url, method, body) => {
  axios.defaults.baseURL = "http://localhost:8089";
  try {
    const res = await axios({
      url,
      method,
      data: body,
      headers: {
        Authorization: `jwt ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error; // 에러를 다시 throw하여 상위 함수에서 처리할 수 있도록 함
  }
};

export const api_user = async (url, method, body) => {
  axios.defaults.baseURL = "http://localhost:8089";
  try {
    const res = await axios({
      url,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error; // 에러를 다시 throw하여 상위 함수에서 처리할 수 있도록 함
  }
};

export const api_post = async (url, method, body) => {
  axios.defaults.baseURL = "http://localhost:8088";
  try {
    const res = await axios({
      url,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("my_token")}`,
      },
    });
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error; // 에러를 다시 throw하여 상위 함수에서 처리할 수 있도록 함
  }
};
