import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import useRequest from "../Hooks/useRequest";

const StoryCard = ({ lore, editLores }) => {
  const [story, setStory] = useState(lore.story_text);
  const { patchRequest } = useRequest();
  const [isEditing, setIsEditing] = useState(false);

  const cancelEdit = () => {
    setIsEditing(false);
    setStory(lore.story_text);
  };

  const editStory = async () => {
    const endpoint = "/user/editLore";
    const response = await patchRequest(endpoint, {
      story_id: lore.id,
      story_text: story,
    });
    if (response) {
      setIsEditing(false);
      editLores(lore.story_id, lore.story_text);
    }
  };

  return (
    <div className="flex flex-col w-full justify-between bg-white/75 text-white font-medium rounded-md shadow-md flex-grow">
      <div className="py-2 px-4">
        <h4 className="text-midnight-green font-bold text-center sm:text-start">
          {lore.user_text}
        </h4>
        <TextareaAutosize
          className={`w-full ${
            isEditing
              ? "bg-white border rounded-md border-black p-2"
              : "bg-transparent border-none"
          } text-tyrian-purple text-center sm:text-start resize-none outline-none`}
          value={story}
          disabled={!isEditing}
          onChange={(e) => setStory(e.target.value)}
        />
        <div className="flex justify-center gap-3">
          {!isEditing && (
            <button
              className="flex gap-2 items-center px-2 py-1 rounded-md bg-midnight-green"
              onClick={() => {
                setIsEditing(true);
              }}
              disabled={isEditing}
            >
              <i className="fa-regular fa-pen-to-square fa-lg"></i>
              Edit
            </button>
          )}
          {isEditing && (
            <>
              <button
                className="flex gap-2 items-center px-2 py-1 rounded-md bg-green-700"
                onClick={editStory}
              >
                <i className="fa-regular fa-pen-to-square fa-lg"></i>
                Confirm
              </button>
              <button
                className="flex gap-2 items-center px-2 py-1 rounded-md bg-red-600"
                onClick={cancelEdit}
              >
                <i className="fa-solid fa-ban"></i>
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
