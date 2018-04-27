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
          <Menu.Item name='home' as={Link} to='/dashboard/dashboard' children="Dashboard">
            <Icon name='home' />
            Home
            {/* <Link to="/dashboard">Dashboard</Link> */}
          </Menu.Item>
          <Menu.Item name='gamepad' as={Link} to='/dashboard/profile'>
            <Icon name='gamepad' />
            Profile
            {/* <Link to="/profile">Profile</Link> */}
          </Menu.Item>
          <Menu.Item name='camera' as={Link} to='/dashboard/gifs'>
            <Icon name='camera' />
            Gifs
            {/* <Link to="/gifs">Gifs</Link> */}
          </Menu.Item>
        </div>
      </Switch>
    </Router>
  );
};

export default SideMenu;