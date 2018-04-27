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
import ScorpioTraits from './ScorpioTraits';
import ScorpioGifs from './ScorpioGifs';
import ScorpioTraitsEditor from './ScorpioTraitsEditor';

export default class DashboardMainContent extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div id="dashboard-main-content">
        <Sidebar.Pushable className="dashboard-main-content" as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <SideMenu
            />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment.Group raised={true}>
              <Segment>
                <Breadcrumbs />
                <Header as='h3' className="dashboard-content-heading">Dashboard</Header>
              </Segment>
              <Segment textAlign={'center'}>
                <Header as='h4' className="dashboard-content-subheading">Latest Scorpio Traits</Header>
                <ScorpioTraits />
              </Segment>
              <Segment textAlign={'center'}>
                <Header as='h4' className="dashboard-content-subheading">Latest Scorpio Gifs</Header>
                <ScorpioGifs />
              </Segment>
            </Segment.Group>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}