import React, { Component } from 'react';
import { Sidebar, Segment, Image, Header, Menu } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';
import Profile from './Profile';
import Gifs from './Gifs';

export default class DashboardMainContent extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div id="dashboard-content">
      <Sidebar.Pushable className="dashboard-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu
          />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Breadcrumbs />
            <Header as='h3' className="dashboard-content-heading">Application Content</Header>
            <Image src='./images/hero.jpg' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    );
  }
}