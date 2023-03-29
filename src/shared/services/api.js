import axios from "axios";

axios.defaults.baseURL = "https://goose-tracker-backend.p.goit.global";

const token = {
  set(token) {
    // console.log("token :>> ", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const pathes = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  REFRESH_TOKEN: "/user/refresh",
  LOGOUT: "/user/logout",
  USER_INFO: "/user/info",
  UPDATE_USER: "/user/update",
};

export const loginUserApi = async (user) => {
  try {
    const { data } = await axios.post(pathes.LOGIN, user);

    token.set(data.data.accessToken);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUserApi = async (user) => {
  try {
    const { data } = await axios.post(pathes.REGISTER, user);
    token.set(data.data.accessToken);
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

export const logoutUserApi = async () => {
  try {
    await axios.get(pathes.LOGOUT);

    return null;
  } catch (error) {
    throw error;
  }
};

export const getUserInfoApi = async (userToken) => {
  try {
    const { data } = await axios.get(pathes.USER_INFO);
    token.set(userToken);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserApi = async (userData) => {
  try {
    const { data } = await axios.patch(pathes.UPDATE_USER, userData);
    return data;
  } catch (error) {
    throw error;
  }
};
