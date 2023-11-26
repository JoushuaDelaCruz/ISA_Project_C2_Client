import React, { useEffect, useState } from "react";
import Navbar from "./Components/Nav";
import StoryCardAdmin from "./Components/StoryCardAdmin";
import useRequest from "./Hooks/useRequest";
import { useLoaderData } from "react-router-dom";
import EndpointsCard from "./Components/EndpointsCard";
import {
  NO_USER_STORIES,
  ERROR_FETCHING_STORIES,
  ALL_USER_LORE_TEXT,
  LOADING_TEXT,
} from "./Utils/constants";
import UserCard from "./Components/UserCard";

const Admin = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [lores, setLores] = useState([]);
  const { getRequest } = useRequest();
  const endpoints = useLoaderData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllStories = async () => {
      try {
        const endpoint = "/story/allStories";
        const stories = await getRequest(endpoint);
        setLores(stories);
        setLoading(false);
      } catch (error) {
        console.error(ERROR_FETCHING_STORIES, error);
        throw error;
      }
    };
    const getAllUsers = async () => {
      try {
        const endpoint = "/admin/users";
        const users = await getRequest(endpoint);
        setUsers(users);
      } catch (error) {
        console.error(ERROR_FETCHING_STORIES, error);
        throw error;
      }
    };
    getAllUsers();
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
          <h3 className="flex justify-center">All Endpoints</h3>
        </section>
        <section className="flex lg:grid-cols-3 max-w-5xl w-full gap-2 flex-col justify-center items-center md:grid-cols-2 md:grid md:justify-items-center">
          {endpoints.map((endpoint) => (
            <EndpointsCard key={endpoint.id} endpoint={endpoint} />
          ))}
        </section>
        <section className="bg-white/70 font-bold rounded-md w-full max-w-5xl p-3 text-center uppercase text-xl text-midnight-green mt-4">
          <h3 className="flex justify-center">All Users</h3>
        </section>
        <section className="flex lg:grid-cols-3 max-w-5xl w-full gap-2 flex-col justify-center items-center md:grid-cols-2 md:grid md:justify-items-center">
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </section>
        <section className="bg-white/70 font-bold rounded-md w-full max-w-5xl p-3 text-center uppercase text-xl text-midnight-green mt-4">
          <h3 className="flex justify-center">{ALL_USER_LORE_TEXT}</h3>
        </section>
        {loading ? (
          <p>{LOADING_TEXT}</p>
        ) : lores.length > 0 ? (
          <div className="max-w-5xl mx-auto">
            <div className="flex lg:grid-cols-3 max-w-5xl w-full gap-2 flex-col justify-center items-center md:grid-cols-2 md:grid md:justify-items-center">
              {lores.map((lore) => (
                <StoryCardAdmin
                  key={lore.id}
                  lore={lore}
                  deleteLore={deleteLore}
                />
              ))}
            </div>
          </div>
        ) : (
          <h3 className="flex justify-center">{NO_USER_STORIES}</h3>
        )}
      </section>
    </main>
  );
};

export default Admin;
