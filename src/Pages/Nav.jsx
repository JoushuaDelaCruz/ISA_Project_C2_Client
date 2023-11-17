import { useState } from "react";
import "../styles/nav.css";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedLogin, setClickedLogin] = useState(false);
  const [clickedSignUp, setClickedSignUp] = useState(false);
  const [clickedAuthentication, setClickedAuthentication] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setClickedLogin(false);
    setClickedSignUp(false);
    setClickedAuthentication(false);
  };

  const handleClickLogin = () => {
    setClickedLogin(true);
    setClickedSignUp(false);
    setClickedAuthentication(false);
    setIsMenuOpen(false);
  };

  const handleClickSignUp = () => {
    setClickedSignUp(true);
    setClickedLogin(false);
    setClickedAuthentication(false);
    setIsMenuOpen(false);
  };

  const handleClickAuthentication = () => {
    setClickedAuthentication(true);
    setClickedLogin(false);
    setClickedSignUp(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent p-4 font-bold pt-8">
      <div className="container mx-auto md:flex md:items-center md:justify-center">
        <a
          href="/"
          className="text-white md:block hidden custom-text-size md font-nunito text-4xl font-bold pt-4"
        >
          PicAWord
        </a>
        <div className="hidden md:block custom-padding">
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedLogin ? '' : 'inactive'} font-nunito pt-4`}
            onClick={handleClickLogin}
          >
            Create Room
          </a>
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedSignUp ? '' : 'inactive'} font-nunito pt-4`}
            onClick={handleClickSignUp}
          >
            Team
          </a>
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedAuthentication ? '' : 'inactive'} font-nunito pt-4`}
            onClick={handleClickAuthentication}
          >
            Authentication
          </a>
        </div>
        <div>
        {!isMenuOpen && (
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none pl-2"
            >
              <i className="fa-solid fa-bars text-3xl"></i>
            </button>
          </div>
        )}
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-start bg-gray-800 bg-opacity-80 p-4">
            <button
              onClick={toggleMenu}
              className="text-white absolute top-0 left-0 m-4 focus:outline-none"
            >
              <i className="fa-solid fa-x text-3xl pt-4 pl-4"></i>
            </button>
            <a href="/" className="text-white mt-4 flex justify-center">
              <span className="text-4xl font-bold font-nunito">PicAWord</span>
            </a>
            <div className="text-white text-left w-full px-4 mt-12">
            <a
              href="/"
              className={`my-5 transition duration-300 block custom-text-size ml-4 p-4 font-nunito`}
              onClick={handleClickLogin}
            >
              Create Room
            </a>
            <a
              href="/"
              className={`my-5 transition duration-300 block custom-text-size ml-4 p-4 font-nunito`}
              onClick={handleClickSignUp}
            >
              Team
            </a>
            <a
              href="/"
              className={`my-5 transition duration-300 block custom-text-size ml-4 p-4 font-nunito`}
              onClick={handleClickSignUp}
            >
              Authentication
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
