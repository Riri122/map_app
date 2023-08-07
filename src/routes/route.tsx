import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const root = createBrowserRouter([{ path: "/", element: <Home/> }]);
