import Home from "./Pages/Home";
import Authenticate from "./Pages/authenticate";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/auth" exact element={<Authenticate />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
