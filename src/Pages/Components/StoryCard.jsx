import React from "react";

const StoryCardAdmin = ({ text }) => {
  return (
    <div className="flex flex-col justify-between bg-white/75 text-white font-medium rounded-md shadow-md flex-grow">
      <div className="py-2 px-4">
        <h4 className="text-midnight-green font-bold text-center sm:text-start">
          I am Gandalf the Great from The Lord of the Rings and I My companion is Frodo from The Shire
        </h4>
        <p className="text-sm text-tyrian-purple">{text}</p>
      </div>
    </div>
  );
};

export default StoryCardAdmin;
