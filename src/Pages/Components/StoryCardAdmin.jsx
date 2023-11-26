import React from "react";
import useRequest from "../Hooks/useRequest";
import { ERROR_DELETING_LORE } from "../Utils/constants";

const StoryCardAdmin = ({ lore, deleteLore }) => {
  const { deleteRequest } = useRequest();

  const onDelete = async () => {
    try {
      const endpoint = `/admin/story/${lore.id}`;
      const response = await deleteRequest(endpoint);
      if (response) {
        deleteLore(lore.id);
      }
    } catch (error) {
      console.error(ERROR_DELETING_LORE, error);
      throw error;
    }
  };

  return (
    <div className="relative py-2 px-4 bg-white/75 text-white font-medium rounded-md h-full shadow-md flex flex-col gap-2">
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 mt-1 mr-1 text-red-800 hover:text-red-500 focus:outline-none"
      >
        <i className="fa-solid fa-x fa-lg p-1"></i>
      </button>
      <div>
        <h4 className="text-midnight-green font-bold text-center sm:text-start">
          {lore.user_text}
        </h4>
      </div>
      <div className="h-full">
        <p className="text-sm text-tyrian-purple">{lore.story_text}</p>
      </div>
    </div>
  );
};

export default StoryCardAdmin;
