import { INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Outlet } from 'react-router-dom';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { Header } from '../header/header';
import { SideMenu } from '../side-menu/side-menu';
import './basic-layout.module.css';

/* eslint-disable-next-line */
export interface BasicLayoutProps {
  navLinkGroups: INavLinkGroup[];
}

export function BasicLayout(props: BasicLayoutProps) {
  return (
    <div className="">
      <Header></Header>
      <nav className="border-r border-gray-100 h-full top-12 fixed w-60 overflow-y-auto">
        <SideMenu navLinkGroups={props.navLinkGroups}></SideMenu>
      </nav>
      <main className="mt-12 ml-60 h-full fixed">
        <div className="fixed w-full h-auto">
          <Breadcrumb></Breadcrumb>
        </div>

        <div className="p-6 overflow-y-auto mt-12 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default BasicLayout;
