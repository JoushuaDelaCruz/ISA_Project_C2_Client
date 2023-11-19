import React from "react";
import Navbar from "./Components/Nav";

const Teams = () => {
  
  return (
    <div className="background">
      <Navbar pageNum={3} />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Teams Page
      </div>
    </div>
  );
};

export default Teams;
