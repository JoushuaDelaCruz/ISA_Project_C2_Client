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
    // Make sure to add the VITE_SERVER variable to your .env file
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

  // const logInRequest = async (credentials, setUser) => {
  //   try {
  //     const endpoint = "/signin";
  //     const result = await postRequest(endpoint, credentials);
  //     setUser(result.user);
  //     return true;
  //   } catch (e) {
  //     return e.response;
  //   }
  // };

  // const signUpRequest = async (credentials, setUser) => {
  //   try {
  //     const endpoint = "/signup";
  //     const { session } = await postRequest(endpoint, credentials);
  //     setUser(session.user);
  //     return session.authenticated;
  //   } catch (e) {
  //     return e.response;
  //   }
  // };
  // Dont move logOutRequest
  const logOutRequest = async () => {
    const endpoint = "/signout";
    const response = await getRequest(endpoint);
    console.log(response);
    return response;
  };

  // const generatedStory = async (description) => {
  //   try {
  //     const tokensEndpoint = `/model/GenerateStory`;
  //     const url = `${tokensEndpoint}?description=${encodeURIComponent(
  //       description
  //     )}`;
  //     const tokensResponse = await getRequest(url);
  //     return tokensResponse;
  //   } catch (error) {
  //     console.error("Error generating tokens:", error);
  //     throw error;
  //   }
  // };

  // const getContextToStory = async (characterContext) => {
  //   try {
  //     const response = await generatedStory(characterContext);
  //     return response.prompt;
  //   } catch (error) {
  //     console.error("Error converting context to story:", error);
  //     throw error;
  //   }
  // };

  // const pingAuthRequest = async () => {
  //   try {
  //     const endpoint = "/ping";
  //     const response = await getRequest(endpoint);
  //     const authenticated = response && response.authenticated;
  //     return authenticated;
  //   } catch (error) {
  //     console.error("Error pinging authentication:", error);
  //     throw error;
  //   }
  // };

  return {
    getRequest,
    postRequest,
    // logInRequest,
    logOutRequest,
    // signUpRequest,
    // getContextToStory,
    // pingAuthRequest,
  };
};

export default useRequest;
