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
    // return import.meta.env.VITE_SERVER + endpoint;
    return "https://dolphin-app-fhiqy.ondigitalocean.app" + endpoint;
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

  const generateTokens = async (description) => {
    try {
      const tokensEndpoint = `/model/GenerateTokens`;
      const url = `${tokensEndpoint}?description=${encodeURIComponent(description)}`;
      const tokensResponse = await getRequest(url);
      console.log(tokensResponse);
      return tokensResponse;
    } catch (error) {
      console.error("Error generating tokens:", error);
      throw error;
    }
  };
  
  
  
  const generateStory = async (tokens) => {
    try {
      const storyEndpoint = `/open-ai/GenerateStory`;
      const promptParam = encodeURIComponent(JSON.stringify(tokens));
      const url = `${storyEndpoint}?Prompt=${promptParam}`;
      const storyResponse = await getRequest(url);
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
