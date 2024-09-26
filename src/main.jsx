import React from "react";
/*---------PAGES-------*/

import Home from "./pages/home.jsx";


/*---------DEFAULT STYLES-------*/

import "./styles/default.css";
import "./styles/typography.css";


/*---------STYLES-------*/



/*---------DEFAULT COMPONENTS-------*/

import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RoomsPage from "./pages/RoomsPage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<RoomsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
