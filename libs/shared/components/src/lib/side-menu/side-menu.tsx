import './side-menu.module.css';
import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

/* eslint-disable-next-line */
export interface SideMenuProps {
  navLinkGroups: INavLinkGroup[];
}

export function SideMenu(props: SideMenuProps) {
  return (
    <Nav
      selectedKey="key6"
      ariaLabel="Nav example with wrapped link text"
      groups={props.navLinkGroups}
    />
  );
}

export default SideMenu;
