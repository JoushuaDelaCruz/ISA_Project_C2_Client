import React from "react";
import Navbar from "./Components/Nav";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-spanish-orange via-spanish-orange to-carmine ">
      <Navbar />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Home Content
      </div>
    </div>
  );
};

export default Home;
