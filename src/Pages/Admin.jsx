import React, { useEffect, useState } from "react";
import Navbar from "./Components/Nav";
import StoryCardAdmin from "./Components/StoryCardAdmin";
import useRequest from "./Hooks/useRequest";
import {NO_USER_STORIES, ERROR_FETCHING_STORIES, ALL_USER_LORE_TEXT} from "./Utils/constants";

const Admin = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [lores, setLores] = useState([]);
  const { getRequest } = useRequest();

  useEffect(() => {
    const getAllStories = async () => {
      try {
        const endpoint = "/story/allStories";
        const stories = await getRequest(endpoint);
        console.log(stories);
        setLores(stories);
        setLoading(false);
      } catch (error) {
        console.error(ERROR_FETCHING_STORIES, error);
        throw error;
      }
    };

    getAllStories();
  }, []);

  const deleteLore = (id) => {
    setLores(lores.filter((lore) => lore.id !== id));
  };

  return (
    <main className="background flex flex-col gap-5">
      <Navbar pageNum={4} user={user} />
      <section className="flex h-full flex-1 w-full px-7 pb-5 items-center flex-col gap-3">
        <section className="bg-white/70 font-bold rounded-md w-full max-w-5xl p-3 text-center uppercase text-xl text-midnight-green mt-4">
          <h3 className="flex justify-center">{ALL_USER_LORE_TEXT}</h3>
        </section>
        {loading ? (
          <p>{LOADING_TEXT}</p>
        ) : lores.length > 0 ? (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-3">
              {lores.map((lore, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-md h-full">
                    <StoryCardAdmin lore={lore} deleteLore={deleteLore} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3 className="flex justify-center">
            {NO_USER_STORIES}
          </h3>
        )}
      </section>
    </main>
  );
};

export default Admin;
