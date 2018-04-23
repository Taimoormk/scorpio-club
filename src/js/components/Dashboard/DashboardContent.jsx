import React, { Component } from 'react';
import { Sidebar, Segment, Image, Header, Menu } from 'semantic-ui-react';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';

export default class DashboardContent extends Component {
  render() {
    const { visible } = this.props;
    return (
      <Sidebar.Pushable className="dashboard-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Breadcrumbs />
            <Header as='h3'>Application Content</Header>
            <Image src='./images/hero.jpg' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}