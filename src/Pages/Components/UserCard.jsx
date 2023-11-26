import React from "react";
import { 
  USERNAME_TEXT,
  USER_TYPE_TEXT,
  API_CALLS_LEFT_TEXT,
  API_CALLS_REQUEST_TEXT,
} from "../Utils/constants";


const UserCard = ({ user }) => {
  return (
    <div className="relative py-2 px-4 bg-white/75 text-white font-medium rounded-md min-h-36 md:min-w-fit w-full shadow-md flex flex-col gap-2">
      <div className="flex gap-3 justify-around">
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">{USERNAME_TEXT}</h1>
          <h2 className="text-tyrian-purple font-semibold capitalize">
            {user.username}
          </h2>
        </div>
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">{USER_TYPE_TEXT}</h1>
          <h2 className="text-tyrian-purple font-semibold">
            {user.user_privilege}
          </h2>
        </div>
      </div>
      <div className="flex gap-3 justify-around">
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-midnight-green text-sm whitespace-nowrap">
            {API_CALLS_LEFT_TEXT}
          </h1>
          <h2 className="text-tyrian-purple font-semibold">
            {user.api_calls_left}
          </h2>
        </div>
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-midnight-green text-sm whitespace-nowrap">
            {API_CALLS_REQUEST_TEXT}
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
