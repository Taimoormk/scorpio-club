import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {
  Link,
} from 'react-router-dom';

const SideMenu = () => (
  <div>
    <Menu.Item name='home'>
      <Icon name='home' />
      <Link to="/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Item name='gamepad'>
      <Icon name='gamepad' />
      <Link to="/dashboard/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/create-gifs">Create Gifs</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/notable-scorpios">Notable Scorpios</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/from-our-scorpios">From Our Scorpios</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/share-scorpio-traits">Share Scorpio Traits</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/marketplace">Marketplace</Link>
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      <Link to="/dashboard/setting">Settings</Link>
    </Menu.Item>
  </div>
);

export default SideMenu;