import { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "create room",
    path: "/create-room",
  },
  { id: 3, name: "teams", path: "/teams" },
  { id: 4, name: "log in", path: "/auth" },
];

const pageBtnState = [
  {
    state: "active",
    className:
      "text-white mx-4 text-2xl capitalize font-nunito border-b-4 pb-4 hover:border-gray-300 hover:text-gray-300 hover:text-opacity-70 hover:border-opacity-70 transition duration-300",
  },
  {
    state: "inactive",
    className:
      "text-gray-400 capitalize text-opacity-70 border-gray-400 border-opacity-70 mx-4 text-2xl font-nunito border-b-4 pb-4 hover:border-white hover:text-white hover:text-opacity-70 hover:border-opacity-70 transition duration-300",
  },
  {
    state: "menu",
    className:
      "my-5 transition duration-300 block capitalize text-2xl ml-4 p-4 font-nunito",
  },
];

const Navbar = ({ pageNum }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4 font-bold pt-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white md:block hidden text-4xl md font-nunito font-black"
        >
          PicAWord
        </Link>
        <div className="hidden w-full md:flex justify-end">
          {pages.map((page) => {
            return (
              <Link
                key={page.id}
                to={page.path}
                className={`${
                  page.id === pageNum
                    ? pageBtnState[0].className
                    : pageBtnState[1].className
                }`}
              >
                {page.name}
              </Link>
            );
          })}
          ;
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
            <Link to="/" className="text-white mt-4 flex justify-center">
              <span className="text-4xl font-black font-nunito">PicAWord</span>
            </Link>
            <div className="text-white text-left w-full px-4 mt-12">
              {pages.map((page) => {
                return (
                  <Link
                    key={`menu-${page.id}`}
                    to={page.path}
                    className={`${pageBtnState[2].className}`}
                  >
                    {page.name}
                  </Link>
                );
              })}
              ;
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
