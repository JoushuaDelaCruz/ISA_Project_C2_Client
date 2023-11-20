const useRequest = () => {
  const getConfig = (method, data) => {
    const config = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: "include",
      body: JSON.stringify(data),
    };
    return config;
  };

  const urlConstructor = (endpoint) => {
    return import.meta.env.VITE_SERVER + endpoint;
  };

  const getRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig("GET", data));
    response = await response.json();
    return response;
  };

  const postRequest = async (endpoint, data = undefined) => {
    const url = urlConstructor(endpoint);
    let response = await fetch(url, getConfig("POST", data));
    response = await response.json();
    return response;
  };

  const logInRequest = async (credentials, setUser) => {
    try {
      const endpoint = "/signin";
      const { session } = await postRequest(endpoint, credentials);
      setUser(session.user);
      return session.authenticated;
    } catch (e) {
      return e.response;
    }
  };

  const signUpRequest = async (credentials, setUser) => {
    try {
      const endpoint = "/signup";
      const { session } = await postRequest(endpoint, credentials);
      setUser(session.user);
      return session.authenticated;
    } catch (e) {
      return e.response;
    }
  };

  const logOutRequest = async () => {
    const endpoint = "/signout";
    const response = await getRequest(endpoint);
    console.log(response);
    return response;
  };

  return {
    getRequest,
    postRequest,
    logInRequest,
    logOutRequest,
    signUpRequest,
  };
};

export default useRequest;
