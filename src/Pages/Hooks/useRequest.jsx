import { useCookies } from "react-cookie";
import axios from "axios";

const useRequest = () => {
  const [, setCookie, removeCookie] = useCookies(["token"]);

  const getConfig = (data) => {
    const config = {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };
    return config;
  };

  const urlConstructor = (endpoint) => {
    return import.meta.env.VITE_SERVER_URL + endpoint;
  };

  const getRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    const response = await axios.get(url, getConfig(data));
    return response.data;
  };

  const postRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    const response = await axios.post(url, getConfig(data));
    return response.data;
  };

  const setUpCookie = (token) => {
    const expireTime = 60 * 60 * 1000;
    setCookie("token", token, {
      path: "/",
      maxAge: expireTime,
      sameSite: "strict",
    });
  };

  const logInRequest = async (credentials) => {
    try {
      const endpoint = "auth/login";
      const response = await postRequest(endpoint, credentials);
      if (response.token) {
        setUpCookie(response.token);
        return null;
      }
      return response.message;
    } catch (e) {
      return e.response.data.message;
    }
  };

  const logOutRequest = async () => {
    removeCookie("token");
  };

  return { getRequest, postRequest, logInRequest, logOutRequest };
};

export default useRequest;
