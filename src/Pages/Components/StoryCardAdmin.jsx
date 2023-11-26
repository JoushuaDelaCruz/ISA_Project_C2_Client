import React from "react";

const StoryCardAdmin = ({ text, onDelete }) => {
  return (
    <div className="relative py-2 px-4 bg-white/75 text-white font-medium rounded-md min-h-36 shadow-md flex flex-col gap-2">
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 mt-1 mr-1 text-gray-400 hover:text-red-500 focus:outline-none"
      >
        <i className="fa-solid fa-x text-xl pr-1 pt-1"></i>
      </button>
      <div>
        <h4 className="text-midnight-green font-bold text-center sm:text-start">
          {" "}
          I am Jason and I am from Canada{" "}
        </h4>
      </div>
      <div>
        <p className="text-sm text-tyrian-purple">{text}</p>
      </div>
    </div>
  );
};

export default StoryCardAdmin;
