// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Breadcrumb } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardAppBar from './Dashboard/DashboardAppBar';
import Breadcrumbs from './Dashboard/Breadcrumb';
import SideMenu from './Dashboard/SideMenu';

export default class Dashboard extends Component {

  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div id="dashboard">
      <DashboardAppBar toggleVisibility={this.toggleVisibility}/>
      <div className="dashboard-main-content">
      </div>
      <div className="dashboard-side-feed">
      </div>
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
        {/* </Container> */}
      </div>
    );
  }
}