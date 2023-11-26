import React, { useState, useEffect } from "react";
import Navbar from "./Components/Nav";
import useRequest from "./Hooks/useRequest";
import {
  ERROR_GENERATING_TOKEN,
  CHARACTER_CONTEXT_CANT_BE_EMPTY,
  DESCRIPTION_TEXT,
  ERROR_FETCHING_STORY,
  STORY_RESULT_TEXT,
  ERROR_OCCUR_TEXT,
  BACK_TEXT
} from "./Utils/constants";

const Home = ({ user }) => {
  const [characterContext, setCharacterContext] = useState("");
  const [storyResult, setStoryResult] = useState(null);
  const [error, setError] = useState(null);
  const [showInput, setShowInput] = useState(true);
  const [loading, setLoading] = useState(false); // Added loading state
  const { getRequest } = useRequest();

  const handleGetStory = async () => {
    try {
      if (!characterContext.trim()) {
        throw new Error(CHARACTER_CONTEXT_CANT_BE_EMPTY);
      }

      setLoading(true);

      const response = await generatedStory(characterContext);
      const storyResult = response.prompt;

      if (storyResult) {
        setStoryResult(storyResult);
        setError(null);
        setShowInput(false);
      } else {
        setError(new Error(response));
      }
    } catch (error) {
      console.error(ERROR_FETCHING_STORY, error);
      setStoryResult(null);
      setError(error);
    } finally {
      setLoading(false); 
    }
  };

  const handleGoBack = () => {
    setShowInput(true);
    setCharacterContext("");
    setStoryResult(null);
    setError(null);
  };

  useEffect(() => {
    if (storyResult) {
      console.log(STORY_RESULT_TEXT, storyResult);
    }
  }, [storyResult]);

  return (
    <div className="background">
      <Navbar pageNum={1} user={user} />
      <div className="w-screen h-screen flex flex-col items-center font-bold text-3xl">
        {!error && !storyResult && showInput && (
          <div className="mb-4 pt-72 w-97 flex justify-center text-center pr-8">
            {DESCRIPTION_TEXT}
          </div>
        )}

        {error && (
          <div className="relative flex flex-col items-center justify-center mt-72">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p>{ERROR_OCCUR_TEXT} {error.message}</p>
            </div>
            <button
              className="bg-midnight-green text-white rounded-lg p-2 mt-2"
              onClick={handleGoBack}
            >
              {BACK_TEXT}
            </button>
          </div>
        )}

        {!error && storyResult && (
          <div className="relative flex flex-col items-center justify-center mt-72">
            <div className="bg-white rounded-lg p-4 shadow-md text-center w-5/6">
              <p className="text-2xl">{storyResult}</p>
            </div>

            <button
              className="bg-midnight-green text-white rounded-lg p-2 mt-2"
              onClick={handleGoBack}
            >
              {BACK_TEXT}
            </button>
          </div>
        )}

        {!error && !storyResult && !showInput && (
          <div className="mb-4 text-center">
            <button
              className="bg-midnight-green text-white rounded-lg p-2 mt-2"
              onClick={handleGoBack}
            >
              {BACK_TEXT}
            </button>
          </div>
        )}

        {!error && !storyResult && showInput && (
          <div className="p-4 rounded-lg flex items-center">
            <input
              type="text"
              className="w-97 h-10 border-2 border-gray-400 rounded-l p-2"
              placeholder="Enter your character's context here..."
              value={characterContext}
              onChange={(e) => setCharacterContext(e.target.value)}
            />
            <button
              className="bg-midnight-green text-white rounded-lg m-2"
              onClick={handleGetStory}
            >
              <i className="fa-solid fa-arrow-right-to-bracket text-2xl p-1.5 pr-2"></i>
            </button>
          </div>
        )}

        {loading && ( 
          <div className="relative flex flex-col items-center justify-center mt-72">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
