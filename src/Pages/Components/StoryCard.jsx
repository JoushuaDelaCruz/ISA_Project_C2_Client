import React from "react";

const StoryCardAdmin = ({ lore }) => {
  return (
    <div className="flex flex-col justify-between bg-white/75 text-white font-medium rounded-md shadow-md flex-grow">
      <div className="py-2 px-4">
        <h4 className="text-midnight-green font-bold text-center sm:text-start">
          {lore.user_text}
        </h4>
        <p className="text-sm text-tyrian-purple">{lore.story_text}</p>
      </div>
    </div>
  );
};

export default StoryCardAdmin;
