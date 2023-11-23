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
    const url = new URL(urlConstructor(endpoint));
  
    if (data) {
      Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    }
  
    let response = await fetch(url, getConfig("GET", undefined));
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

  const generateTokens = async (characterContext) => {
    try {
      const tokensEndpoint = `/model/GenerateTokens`;
      const tokensResponse = await getRequest(tokensEndpoint, characterContext);
      console.log(tokensResponse);
      return tokensResponse;
    } catch (error) {
      console.error("Error generating tokens:", error);
      throw error;
    }
  };
  
  const generateStory = async (tokens) => {
    try {;
      const storyEndpoint = `/open-ai/GenerateStory`;
      const storyResponse = await getRequest(storyEndpoint, tokens);
      console.log(storyResponse);
      return storyResponse;
    } catch (error) {
      console.error("Error generating story:", error);
      throw error;
    }
  };

  const getContextToStory = async (characterContext) => {
    try {
      const tokensResponse = await generateTokens(characterContext);
      const storyResponse = await generateStory(tokensResponse);
      return storyResponse;
    } catch (error) {
      console.error("Error converting context to story:", error);
      throw error;
    }
  };

  return {
    getRequest,
    postRequest,
    logInRequest,
    logOutRequest,
    signUpRequest,
    getContextToStory,
  };
};

export default useRequest;
