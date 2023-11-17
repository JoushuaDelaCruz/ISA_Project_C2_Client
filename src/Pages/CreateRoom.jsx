import React from "react";
import Navbar from "./Components/Nav";

const CreateRoom = () => {
  return (
    <div className="background ">
      <Navbar pageNum={2} />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Create Room Page
      </div>
    </div>
  );
};

export default CreateRoom;
