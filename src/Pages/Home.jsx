import React, { useState, useEffect } from "react";
import Navbar from "./Components/Nav";
import useRequest from "./Hooks/useRequest";

const Home = ({ user }) => {
  const [characterContext, setCharacterContext] = useState("");
  const [storyResult, setStoryResult] = useState(null);
  const [error, setError] = useState(null);
  const [showInput, setShowInput] = useState(true);
  const { getContextToStory } = useRequest();

  const handleGetStory = async () => {
    try {
      const response = await getContextToStory(characterContext);
      setStoryResult(response);
      setError(null);
      setShowInput(false);
    } catch (error) {
      console.error("Error fetching story:", error);
      setStoryResult(null);
      setError(error);
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
      console.log("Story Result:", storyResult);
    }
  }, [storyResult]);

  return (
    <div className="background">
      <Navbar pageNum={1} user={user} />
      <div className="w-screen h-screen flex flex-col items-center font-bold text-3xl">
        {!error && !storyResult && showInput && (
          <div className="mb-4 pt-72 w-97 flex justify-center text-center pr-8">
            Telore crafts captivating fantasy backstories from your character context using artificial intelligence and storytelling magic. Try it out!
          </div>
        )}

        {error && (
          <div className="relative flex flex-col items-center justify-center mt-72">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p>An error occurred: {error.message}</p>
            </div>
            <button className="bg-midnight-green text-white rounded-lg p-2 mt-2" onClick={handleGoBack}>
              Back
            </button>
          </div>
        )}

        {!error && storyResult && (
          <div className="relative flex flex-col items-center justify-center mt-72">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <p>Status Code: {storyResult.statusCode}</p>
              <p>Error Message: {storyResult.message}</p>
              <p>Error: {storyResult.error}</p>
            </div>
            <button className="bg-midnight-green text-white rounded-lg p-2 mt-2" onClick={handleGoBack}>
              Back
            </button>
          </div>
        )}


        {!error && !storyResult && !showInput && (
          <div className="mb-4 text-center">
            <button className="bg-midnight-green text-white rounded-lg p-2 mt-2" onClick={handleGoBack}>
              Back
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
            <button className="bg-midnight-green text-white rounded-lg m-2" onClick={handleGetStory}>
              <i className="fa-solid fa-arrow-right-to-bracket text-2xl p-1.5 pr-2"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
