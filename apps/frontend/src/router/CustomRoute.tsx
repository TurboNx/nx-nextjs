import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import NotFound from '../views/not-found';
import Login from '../views/login/login';
import { PrivateRoute } from './PrivateRoute';
function CustomRoute() {
  return useRoutes([
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          path: '/tt',
          element: (
            <>
              {' '}
              <div className="text-4xl text-[40px]">{'Welcome to Ui!'}</div>
              <div className="text-[40px]">111</div>
            </>
          ),
        },
      ],
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
}

export default CustomRoute;
