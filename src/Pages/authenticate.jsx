import { useState } from "react";
import { Link } from "react-router-dom";

const Authenticate = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    setUsername("");
    setPassword("");
    setIsLogin(!isLogin);
  };

  return (
    <main className="h-screen flex flex-col w-screen min-h-full">
      <section className="background flex-grow flex flex-col items-center md:h-full">
        <Link
          to={"/"}
          className="text-white h-fit py-7 text-4xl font-black font-nunito pt-10"
        >
          {" "}
          PicAWord{" "}
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
                Log In
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
                Sign Up{" "}
              </button>
            </header>
            <div className=" flex flex-col justify-around bg-tyrian-purple/30 rounded-b-md px-3 py-8 gap-5">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={isLogin ? "Username0123" : "Create a new username"}
                className="w-full bg-white/60 rounded-md border-2 border-white/50 py-1 px-2 text-lg placeholder:text-white/60 font-extrabold focus:outline-none focus:bg-transparent focus:text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLogin ? "Password0123" : "Enter a new password"}
                className="w-full bg-white/60 rounded-md border-2 border-white/50 py-1 px-2 text-lg placeholder:text-white/60 font-extrabold focus:outline-none focus:bg-transparent focus:text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex-grow cursor-pointer mb-4 md:mb-0">
          <button className="flex justify-center transform items-center content-center rounded-md bg-white gap-3 ring-1 py-2 px-16 border-b-4 shadow-md border-black transition duration-200 ease-in-out hover:translate-y-px hover:border-b-2">
            {" "}
            <i className="fa-solid fa-play fa-xl text-cyan-400"></i>
            <label
              htmlFor="play"
              className="text-xl uppercase font-bold cursor-pointer"
            >
              Play
            </label>
          </button>
        </div>
      </section>
      <section className="bg-midnight-green flex-grow max-h-16 md:flex-none"></section>
    </main>
  );
};

export default Authenticate;
