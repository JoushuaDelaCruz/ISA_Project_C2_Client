import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "./Hooks/useRequest";
import { 
  LOG_IN_TEXT, 
  SIGN_UP_TEXT, 
  TELORE_TEXT,
  UNABLE_AUTH_TEXT,
  INVALID_USER_PASS_TEXT,
  ERROR_SIGNING_UP,
  ERROR_LOGIN,
  PLEASE_VALID_USER_PASS_TEXT,
} from "./Utils/constants";

const Authenticate = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [invalidResponse, setInvalidResponse] = useState(null);
  const navigate = useNavigate();
  const { postRequest } = useRequest();

  const toggleLogin = () => {
    setUsername("");
    setPassword("");
    setIsLogin(!isLogin);
    setIsUsernameValid(null);
    setIsPasswordValid(null);
    setInvalidResponse(null);
  };

  const validateUsername = () => {
    if (username.length <= 0) {
      setIsUsernameValid(false);
      return false;
    }
    setIsUsernameValid(true);
    return true;
  };

  const validatePassword = () => {
    if (password.length <= 0) {
      setIsPasswordValid(false);
      return false;
    }
    setIsPasswordValid(true);
    return true;
  };

  const handleSignUp = async () => {
    try {
      const credentials = { username, password };
      const endpoint = "/signup";
      const response = await postRequest(endpoint, credentials);
      setUser(response.user);

      if (response.success) {
        navigate("/");
      } else {
        setInvalidResponse({UNABLE_AUTH_TEXT});
      }
    } catch (e) {
      setInvalidResponse(ERROR_SIGNING_UP);
    }
  };

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const endpoint = "/signin";
      const result = await postRequest(endpoint, credentials);

      setUser(result.user);

      if (result.user) {
        navigate("/");
      } else {
        setInvalidResponse(INVALID_USER_PASS_TEXT);
      }
    } catch (e) {
      setInvalidResponse(ERROR_LOGIN);
    }
  };

  const handleClick = () => {
    const checkUsername = validateUsername();
    const checkPassword = validatePassword();

    if (!checkPassword || !checkUsername) {
      setInvalidResponse(PLEASE_VALID_USER_PASS_TEXT);
      return;
    }

    if (isLogin) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  return (
    <main className="h-screen flex flex-col w-screen min-h-full">
      <section className="background flex-grow flex flex-col items-center md:h-full">
        <Link
          to={"/"}
          className="text-white h-fit py-7 text-4xl font-black font-nunito pt-10"
        >
          {" "}
          {TELORE_TEXT}{" "}
        </Link>
        <div className="flex-grow flex justify-center items-center w-11/12 max-w-md h-5/6 md:h-1/2">
          <div className="w-full">
            <header className="flex text-xl text-gray-300 text-opacity-50 font-black gap-1">
              <button
                className={
                  (isLogin ? "text-cyan-400" : "mb-1") +
                  " w-1/2 bg-tyrian-purple/30 py-2 rounded-t-md focus:outline-none"
                }
                onClick={toggleLogin}
                disabled={isLogin}
              >
                {LOG_IN_TEXT}
              </button>
              <button
                className={
                  (!isLogin ? "text-cyan-400" : "mb-1") +
                  " w-1/2 bg-tyrian-purple/30 py-2 rounded-t-md focus:outline-none"
                }
                onClick={toggleLogin}
                disabled={!isLogin}
              >
                {" "}
                {SIGN_UP_TEXT}{" "}
              </button>
            </header>
            <div className=" flex flex-col justify-around bg-tyrian-purple/30 rounded-b-md px-3 py-8 gap-5">
              {invalidResponse !== null && (
                <p className="text-center font-bold bg-white/60 text-red-600 rounded-md py-px ring-2 ring-red-500">
                  {invalidResponse}
                </p>
              )}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={isLogin ? "Username0123" : "Create a new username"}
                className={`w-full bg-white/60 rounded-md border-2 ${
                  isUsernameValid ?? true ? "border-white/50" : "border-red-400"
                } py-1 px-2 text-lg placeholder:text-white/60 font-extrabold focus:outline-none focus:bg-transparent focus:text-white`}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLogin ? "Password0123" : "Enter a new password"}
                className={`w-full bg-white/60 rounded-md border-2 ${
                  isPasswordValid ?? true ? "border-white/50" : "border-red-400"
                } py-1 px-2 text-lg placeholder:text-white/60 font-extrabold focus:outline-none focus:bg-transparent focus:text-white`}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow cursor-pointer mb-4 md:mb-0">
          <button
            className="flex justify-center transform items-center content-center rounded-md bg-white gap-3 ring-1 py-2 px-16 border-b-4 shadow-md border-black transition duration-200 ease-in-out hover:translate-y-px hover:border-b-2"
            onClick={handleClick}
          >
            {" "}
            <i className="fa-solid fa-play fa-xl text-cyan-400"></i>
            <label
              htmlFor="play"
              className="text-xl uppercase font-bold cursor-pointer"
            >
              {isLogin ? "Play" : "Create"}
            </label>
          </button>
        </div>
      </section>
      <section className="bg-midnight-green flex-grow max-h-16 md:flex-none"></section>
    </main>
  );
};

export default Authenticate;
