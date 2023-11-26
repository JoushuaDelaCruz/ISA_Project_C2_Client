import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import StoryCard from "./Components/StoryCard";
import useRequest from "./Hooks/useRequest";

const Profile = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [lores, setLores] = useState([]);
  const { getRequest } = useRequest();

  useEffect(() => {
    const getLores = async () => {
      const endpoint = "/user/userLores";
      const response = await getRequest(endpoint);
      setLores(response);
      setLoading(false);
    };
    getLores();
  }, []);

  const editLores = (id, text) => {
    setLores(
      lores.map((lore) => {
        if (lore.id === id) {
          lore.story_text = text;
        }
        return lore;
      })
    );
  };

  return (
    <main className="background flex flex-col gap-5">
      <Nav pageNum={3} user={user} />
      <section className="flex h-full flex-1 w-full px-7 pb-5 items-center flex-col gap-3">
        <header className="flex border-b pb-1.5 w-full border-white items-center max-w-5xl">
          {" "}
          <h1 className="text-2xl px-4 text-yellow-100  font-semibold">
            {" "}
            Hi! <span className="font-bold">{user?.username}</span>{" "}
          </h1>
          <i className="fa-regular fa-face-smile fa-xl text-yellow-300"></i>{" "}
        </header>
        <div className="flex flex-col w-full font-medium text-white bg-white/40 rounded-md max-w-5xl p-3 gap-5">
          <h2> Remaining Requests: {user?.api_calls_left} </h2>
        </div>
        <section className="bg-white/70 font-bold rounded-md w-full max-w-5xl p-3  text-center uppercase text-xl text-midnight-green">
          {lores.length > 0 ? (
            <h3> Your Lores </h3>
          ) : (
            <h3>Your lores are empty.</h3>
          )}
        </section>
        {lores.length > 0 && (
          <div className="flex flex-col gap-3 max-w-5xl w-full">
            {lores.map((lore) => {
              return (
                <StoryCard key={lore.id} lore={lore} editLores={editLores} />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Profile;
