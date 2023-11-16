import React, { useEffect } from "react";
import Navbar from "./Nav";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="bg-0F4C5C">
      <Navbar />
      <div className="text-red-600 w-screen h-screen flex justify-center items-center font-bold text-3xl">
        Home Content
      </div>
    </div>
  );
};

export default Home;
