import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, News, Webb, SpaceX, Apod, Hubble } from './pages';
import { newsPageLoader } from './pages/news/News.loader';
import { ErrorElement } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'news',
        element: <News />,
        loader: newsPageLoader,
        errorElement: <ErrorElement />,
      },
      { path: 'webb', element: <Webb /> },
      { path: 'spacex', element: <SpaceX /> },
      { path: 'apod', element: <Apod /> },
      { path: 'hubble', element: <Hubble /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
