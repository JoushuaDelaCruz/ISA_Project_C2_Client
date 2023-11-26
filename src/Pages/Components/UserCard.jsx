import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="relative py-2 px-4 bg-white/75 text-white font-medium rounded-md min-h-36 md:min-w-fit w-full shadow-md flex flex-col gap-2">
      <div className="flex gap-3 justify-around">
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">Username</h1>
          <h2 className="text-tyrian-purple font-semibold capitalize">
            {user.username}
          </h2>
        </div>
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">User Type</h1>
          <h2 className="text-tyrian-purple font-semibold">
            {user.user_privilege}
          </h2>
        </div>
      </div>
      <div className="flex gap-3 justify-around">
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-midnight-green text-sm whitespace-nowrap">
            API Calls Left
          </h1>
          <h2 className="text-tyrian-purple font-semibold">
            {user.api_calls_left}
          </h2>
        </div>
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-midnight-green text-sm whitespace-nowrap">
            API Calls Requested
          </h1>
          <h2 className="text-tyrian-purple font-semibold">
            {user.total_requests}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
