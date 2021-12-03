import React from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom'; // A wrapper for <Route> that redirects to the login
import { BasicLayout } from '@nx-nextjs/shared/components';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
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
export const PrivateAuth: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const account = useSelector(({ account }: RootState) => account);

  const location = useLocation();
  if (!account.isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export interface PrivateRouteProps {}
export const PrivateRoute = (props: PrivateRouteProps) => {
  return (
    <PrivateAuth>
      <BasicLayout navLinkGroups={navLinkGroups} />
    </PrivateAuth>
  );
};
