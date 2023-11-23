import React from "react";

const StoryCard = ({ text }) => {
  return (
    <div className="py-2 px-4 bg-white/75 text-white font-medium rounded-md min-h-36 shadow-md flex flex-col gap-2">
      <h4 className="text-midnight-green font-bold text-center sm:text-start">
        {" "}
        I am Gandalf the Great from The Lord of the Rings and I My companion is
        Frodo from The Shire{" "}
      </h4>
      <p className="text-sm text-tyrian-purple">{text}</p>
    </div>
  );
};

export default StoryCard;
