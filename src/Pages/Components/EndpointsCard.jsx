import React from "react";

const EndpointsCard = ({ endpoint }) => {
  return (
    <div className="relative py-2 px-4 bg-white/75 text-white font-medium rounded-md min-h-36 md:min-w-fit w-full shadow-md flex flex-col gap-2">
      <div className="flex gap-3 justify-around">
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">Endpoint</h1>
          <h2 className="text-tyrian-purple font-semibold">
            {endpoint.endpoint}
          </h2>
        </div>
        <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
          <h1 className="text-lg text-midnight-green">Method</h1>
          <h2 className="text-tyrian-purple font-semibold">
            {endpoint.method}
          </h2>
        </div>
      </div>
      <div className="flex flex-col text-center border border-white w-full py-2 rounded-md gap-2 sm:px-4">
        <h1 className="text-lg text-midnight-green">Requests</h1>
        <h2 className="text-tyrian-purple text-xl font-semibold">
          {endpoint.total}
        </h2>
      </div>
    </div>
  );
};

export default EndpointsCard;
