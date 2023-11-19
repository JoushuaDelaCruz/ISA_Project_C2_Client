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

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/auth" exact element={<Authenticate />} />
        <Route path="/admin" exact element={<Admin />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
