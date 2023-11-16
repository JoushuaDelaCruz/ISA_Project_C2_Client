import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
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
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
