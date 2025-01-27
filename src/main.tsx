import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "@/pages/HomeLayout";
import Apod from "@/pages/Apod";
import Hubble from "@/pages/Hubble";
import Landing from "@/pages/Landing";
import News, { newsPageLoader } from "@/pages/News";
import SpaceX from "@/pages/SpaceX";
import Webb from "@/pages/Webb";

import "./index.css";
import ErrorElement from "@/components/error/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "news",
        element: <News />,
        loader: newsPageLoader,
        errorElement: <ErrorElement />,
      },
      { path: "webb", element: <Webb /> },
      { path: "spacex", element: <SpaceX /> },
      { path: "apod", element: <Apod /> },
      { path: "hubble", element: <Hubble /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
