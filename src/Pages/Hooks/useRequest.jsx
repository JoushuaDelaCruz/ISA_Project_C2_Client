import { HTTP_METHODS, ENDPOINTS } from '../Utils/constants.jsx';

const useRequest = () => {
  const getConfig = (method, data) => {
    const config = {
      method: method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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
    response = await response.json();
    return response;
  };

  const postRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig(HTTP_METHODS.POST, data));
    response = await response.json();
    return response;
  };

  const patchRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig(HTTP_METHODS.PATCH, data));
    response = await response.json();
    return response;
  };

  const deleteRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    const response = await fetch(url, getConfig(HTTP_METHODS.DELETE, data));
    return response.status === 200;
  };

  const logOutRequest = async () => {
    const response = await getRequest(ENDPOINTS.SIGNOUT);
    console.log(response);
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
