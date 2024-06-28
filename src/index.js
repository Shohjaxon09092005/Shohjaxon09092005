import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import DiscoverPage from './page/DiscoverPage';
import FundedPage from './page/FundedPage';

const appRouter = createBrowserRouter([{
  element: <App />,
  path: '/',
  errorElement: <ErrorPage />,
  children: [{
    path: '/',
    element: <HomePage />
  },
  {
    path: '/discover',
    element: <DiscoverPage />
  },
  {
    path: '/Funded',
    element: <FundedPage />
  }
  ]


}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

