import React from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom'; // A wrapper for <Route> that redirects to the login
import { BasicLayout } from '@nx-nextjs/shared/components';
import { useSelector } from 'react-redux';
import { INavLinkGroup } from '@fluentui/react/lib/Nav';
import { RootState } from '@nx-nextjs/shared/store';
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
export interface PrivateRouteProps {
  navLinkGroups: INavLinkGroup[];
}
export const PrivateRoute = (props: PrivateRouteProps) => {
  return (
    <PrivateAuth>
      <BasicLayout navLinkGroups={props.navLinkGroups} />
    </PrivateAuth>
  );
};
