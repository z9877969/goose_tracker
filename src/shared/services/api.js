import axios from "axios";

axios.defaults.baseURL = "https://goose-tracker-backend.p.goit.global";

const pathes = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  REFRESH_TOKEN: "/user/refresh",
};

export const loginUserApi = async (user) => {
  try {
    const { data } = await axios.post(pathes.LOGIN, user);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUserApi = async (user) => {
  try {
    const { data } = await axios.post(pathes.REGISTER, user);
    return data;
  } catch (error) {
    throw error;
  }
};

export const refreshTokenApi = async (user) => {
  try {
    const { data } = await axios.post(pathes.REFRESH_TOKEN, user);
    return data;
  } catch (error) {
    throw error;
  }
};
