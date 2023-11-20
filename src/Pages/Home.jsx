import React from "react";
import Navbar from "./Components/Nav";

const Home = ({ user }) => {
  return (
    <div className="background">
      <Navbar pageNum={1} user={user} />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Home Content
      </div>
    </div>
  );
};

export default Home;
