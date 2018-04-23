import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const SideMenu = () => (
  <div>
    <Menu.Item name='home'>
      <Icon name='home' />
      Dashboard
    </Menu.Item>
    <Menu.Item name='gamepad'>
      <Icon name='gamepad' />
      Profile
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      Gifs
    </Menu.Item>
  </div>
);

export default SideMenu;