import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import StoryCard from "./Components/StoryCard";

const texts = [
  {
    text: `Jason was an avid gamer, spending most of his free time exploring the virtual realms of fantasy. His favorite game was "Skyrim," where he could wield swords, cast spells, and embark on epic quests. But there was something missing in his gaming adventures – a loyal companion. One day, while browsing through the local shelter, Jason stumbled upon a dog named Skyrim. The name alone caught his attention, and when he met the pup, it was love at first sight. `,
  },
  {
    text: `Skyrim had a spirit that matched the game's intensity, and Jason knew they were destined to be partners. As they began their journey together, Jason realized that Skyrim was more than just a dog; he was a true hero. In the game, Jason faced countless challenges, battling dragons and exploring treacherous caves. But in real life, it was Skyrim who protected him from loneliness and brightened his days with unconditional love.`,
  },
  {
    text: `Whenever Jason played Skyrim, Skyrim the dog would curl up beside him, watching the screen with curious eyes. They were an unstoppable team, both in the virtual and real worlds. Jason's friends were amazed by the bond he shared with Skyrim. They would often come over to witness their adventures, cheering them on as they triumphed over virtual enemies.`,
  },
  {
    text: `The game became a way for Jason to connect with others, as Skyrim the dog captured their hearts, too. As the years passed, Jason and Skyrim's adventures continued. They explored vast lands, fought fierce battles, and saved damsels in distress. But the true magic was in their friendship. Together, they showed the world that heroes come in all forms, even in the shape of a furry companion.`,
  },
  {
    text: `And so, in the realm of "Skyrim" and reality, Jason and Skyrim forged a bond that could never be broken. They proved that sometimes, the most extraordinary adventures are the ones that happen with your best friend by your side.`,
  },
];

const getData = async () => {
  setTimeout(1.5);
  return texts;
};

const Profile = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [lores, setLores] = useState([]);

  useEffect(() => {
    const getLores = async () => {
      const response = await getData();
      setLores(response);
      setLoading(false);
    };
    getLores();
  });

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
          <div className="flex flex-col gap-3 max-w-5xl">
            {lores.map((lore) => {
              return <StoryCard text={lore.text} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Profile;
