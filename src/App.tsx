import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Form from "./Form";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
