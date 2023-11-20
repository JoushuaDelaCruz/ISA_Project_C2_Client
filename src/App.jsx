import Home from "./Pages/Home";
import Authenticate from "./Pages/Authenticate";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Teams from "./Pages/Teams";
import CreateRoom from "./Pages/CreateRoom";
import Admin from "./Pages/Admin";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const adminLoader = async () => {
    if (user && user.admin) {
      return null;
    } else {
      window.location.href = "/";
      return null;
    }
  };

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home user={user} />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route
          path="/auth"
          exact
          element={<Authenticate setUser={setUser} />}
        />
        <Route loader={adminLoader} path="/admin" exact element={<Admin />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
