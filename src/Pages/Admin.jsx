import React, { useEffect, useState } from "react";
import Navbar from "./Components/Nav";
import StoryCardAdmin from "./Components/StoryCardAdmin";
import useRequest from "./Hooks/useRequest";
import { useLoaderData } from "react-router-dom";
import EndpointsCard from "./Components/EndpointsCard";

const Admin = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [lores, setLores] = useState([]);
  const { getRequest } = useRequest();
  const endpoints = useLoaderData();

  useEffect(() => {
    const getAllStories = async () => {
      try {
        const endpoint = "/story/allStories";
        const stories = await getRequest(endpoint);
        setLores(stories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories:", error);
        throw error;
      }
    };
    console.log(endpoints);
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
          <h3 className="flex justify-center">All User Lores</h3>
        </section>
        {loading ? (
          <p>Loading...</p>
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
            There are no user lores in the database
          </h3>
        )}
      </section>
    </main>
  );
};

export default Admin;
