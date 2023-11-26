import Home from "./Pages/Home";
import Authenticate from "./Pages/Authenticate";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Teams from "./Pages/Teams";
import Admin from "./Pages/Admin";
import { useEffect, useState } from "react";
import Profile from "./Pages/Profile";
import useRequest from "./Pages/Hooks/useRequest";

const App = () => {
  const [user, setUser] = useState(null);
  const { getRequest } = useRequest();

  useEffect(() => {
    const verifyUser = async () => {
      const endpoint = "/session";
      const response = await getRequest(endpoint);
      setUser(response.user);
    };
    verifyUser();
  }, []);

  const adminLoader = async () => {
    if (user && user.privilege === "ADMIN") {
      const response = await getRequest("/admin/endpoints");
      return response;
    } else {
      window.location.href = "/";
      return null;
    }
  };

  const profileLoader = async () => {
    if (user) {
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
        <Route
          path="/auth"
          exact
          element={<Authenticate setUser={setUser} />}
        />
        <Route
          path="/profile"
          loader={profileLoader}
          element={<Profile user={user} />}
        />

        <Route
          loader={adminLoader}
          path="/admin"
          exact
          element={<Admin user={user} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
