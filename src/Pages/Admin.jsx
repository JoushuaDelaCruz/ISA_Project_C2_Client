import React from "react";
import Navbar from "./Components/Nav";

const Admin = () => {
  return (
    <div className="background">
      <Navbar pageNum={4} />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Admin Page
      </div>
    </div>
  );
};

export default Admin;
