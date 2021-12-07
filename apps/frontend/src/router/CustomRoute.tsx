import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import NotFound from '../views/basic/not-found/not-found';
import Login from '../views/basic/login/login';
import { PrivateRoute } from './PrivateRoute';
import { INavLinkGroup } from '@fluentui/react/lib/Nav';
// adding an empty title string to each link removes the tooltip;
// it's unnecessary now that the text wraps, and will not truncat;
const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Dashboard',
    links: [
      {
        key: 'Home',
        name: 'Home',
        url: '/dashboard',
      },
    ],
  },
];
function CustomRoute() {
  return useRoutes([
    {
      path: '/',
      element: <PrivateRoute navLinkGroups={navLinkGroups} />,
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
