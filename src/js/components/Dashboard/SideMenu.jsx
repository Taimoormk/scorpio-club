import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Dashboard from '../Dashboard';
import Profile from './Profile';
import Gifs from './Gifs';

const SideMenu = (props) => {
  return (
    <Router>
      <Switch>
        <div>
          <Menu.Item name='home'>
            <Icon name='home' />
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            <Link to="/gifs">Gifs</Link>
          </Menu.Item>
        </div>
      </Switch>
    </Router>
  );
};

export default SideMenu;