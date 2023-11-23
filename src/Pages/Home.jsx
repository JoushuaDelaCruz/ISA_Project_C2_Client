import React from "react";
import Navbar from "./Components/Nav";

const Home = ({ user }) => {
  return (
    <div className="background">
      <Navbar pageNum={1} user={user} />
      <div className="w-screen h-screen flex flex-col items-center font-bold text-3xl">
      <div className="mb-4 pt-72 w-97 flex justify-center text-center pr-8">
        Telore crafts captivating fantasy backstories from your character context using artificial intelligence and storytelling magic. Try it out!
        </div>
        <div className="p-4 rounded-lg flex items-center">
          <input
            type="text"
            className="w-97 h-10 border-2 border-gray-400 rounded-l p-2"
            placeholder="Enter your character's context here..."
          />
          <button className="bg-midnight-green text-white rounded-lg m-2">
            <i className="fa-solid fa-arrow-right-to-bracket text-2xl p-1.5 pr-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
