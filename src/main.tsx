import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "@/pages/HomeLayout";
import ApodPage from "@/pages/ApodPage.tsx";
import HubblePage from "@/pages/HubblePage.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import NewsPage, { newsPageLoader } from "@/pages/NewsPage.tsx";
import SpaceXPage from "@/pages/SpaceXPage.tsx";
import Webb from "@/pages/Webb";

import "./index.css";
import ErrorElement from "@/components/error/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "news",
        element: <NewsPage />,
        loader: newsPageLoader,
        errorElement: <ErrorElement />,
      },
      { path: "webb", element: <Webb /> },
      { path: "spacex", element: <SpaceXPage /> },
      { path: "apod", element: <ApodPage /> },
      { path: "hubble", element: <HubblePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
