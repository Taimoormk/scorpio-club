import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Link,
  Switch
} from 'react-router-dom';

const SideMenu = () => (
  <Router>
    <Switch>
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
          <Link to="/dashboard/gifs">Gifs</Link>
        </Menu.Item>
      </div>
    </Switch>
  </Router>
);

export default SideMenu;