import { HTTP_METHODS, ENDPOINTS } from "../Utils/constants.jsx";

const useRequest = () => {
  const getConfig = (method, data) => {
    const config = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    };
    return config;
  };

  const urlConstructor = (endpoint) => {
    return import.meta.env.VITE_SERVER + endpoint;
  };

  const getRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig(HTTP_METHODS.GET, data));
  
    if (response.status === 200) {
      response = await response.json();
      return response;
    }
  
    if (response.status === 401) {
      logOutRequest();
      window.location.href = "/";
    }
  
    if (response.status === 405) {
      response = await response.json();
      return response.message; 
    }
    if (response.status === 403) {
      return false;
    }
  };
  
  const postRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig(HTTP_METHODS.POST, data));
    if (response.status === 200 || response.status === 201) {
      response = await response.json();
      return response;
    }
    if (response.status === 401) {
      logOutRequest();
      window.location.href = "/";
    }
    if (response.status === 405) {
      console.log(await response.json());
    }
  };

  const patchRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig(HTTP_METHODS.PATCH, data));
    if (response.status === 200) {
      response = await response.json();
      return response;
    }
    if (response.status === 401) {
      logOutRequest();
      window.location.href = "/";
    }
  };

  const deleteRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    const response = await fetch(url, getConfig(HTTP_METHODS.DELETE, data));
    if (response.status === 200) {
      return true;
    }
    if (response.status === 401) {
      logOutRequest();
      window.location.href = "/";
    }
  };

  const logOutRequest = async () => {
    const response = await getRequest(ENDPOINTS.SIGNOUT);
    return response;
  };

  return {
    getRequest,
    postRequest,
    logOutRequest,
    patchRequest,
    deleteRequest,
  };
};

export default useRequest;
