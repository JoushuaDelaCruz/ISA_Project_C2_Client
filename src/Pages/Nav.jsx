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
    <nav className="bg-transparent p-4 nav-font">
      <div className="container mx-auto md:flex md:items-center md:justify-center">
        <a
          href="/"
          className="text-lg font-semibold md:block hidden custom-text-size md"
        >
          Logo
        </a>
        <div className="hidden md:block custom-padding">
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedLogin ? '' : 'inactive'}`}
            onClick={handleClickLogin}
          >
            Create Room
          </a>
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedSignUp ? '' : 'inactive'}`}
            onClick={handleClickSignUp}
          >
            Team
          </a>
          <a
            href="/"
            className={`text-white mx-4 custom-text-size ${clickedAuthentication ? '' : 'inactive'}`}
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
              className="text-white focus:outline-none mr-8"
            >
              &#9776;
            </button>
          </div>
        )}
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute inset-0 bg-gray-800 flex flex-col items-center justify-start bg-black bg-opacity-80 p-4">
            <button
              onClick={toggleMenu}
              className="text-white absolute top-0 left-0 m-4 focus:outline-none"
            >
              X
            </button>
            <a href="/" className="text-white mt-4 flex justify-center">
              <span className="text-2xl font-bold">Logo</span>
            </a>
            <div className="text-white text-left w-full px-4 mt-12">
            <a
              href="/"
              className={`my-5 transition duration-300 block custom-text-size ml-4 p-4`}
              onClick={handleClickLogin}
            >
              Log In
            </a>
            <a
              href="/"
              className={`my-5 transition duration-300 block custom-text-size ml-4 p-4`}
              onClick={handleClickSignUp}
            >
              Sign Up
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
