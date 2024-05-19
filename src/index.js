// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import InteriorPainting from "./pages/Interior";
import ExteriorPainting from "./pages/Exterior";
import ApartmentPainting from "./pages/Apartment";
import CabinetPainting from "./pages/Cabinet";
import DrivewayPainting from "./pages/Driveway";
import EpoxyService from "./pages/Epoxy";
import FencePainting from "./pages/Fence";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "interior",
        element: <InteriorPainting />,
      },
      {
        path: "exterior",
        element: <ExteriorPainting />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "apartment",
        element: <ApartmentPainting />,
      },
      {
        path: "cabinet",
        element: <CabinetPainting />,
      },
      {
        path: "driveway",
        element: <DrivewayPainting />,
      },
      {
        path: "epoxy",
        element: <EpoxyService />,
      },
      {
        path: "fence",
        element: <FencePainting />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
