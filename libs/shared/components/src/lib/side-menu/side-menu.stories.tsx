import { INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Story, Meta } from '@storybook/react';
import { SideMenu, SideMenuProps } from './side-menu';
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
export default {
  component: SideMenu,
  title: 'SideMenu',
} as Meta;

const Template: Story<SideMenuProps> = (args) => <SideMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navLinkGroups,
};
