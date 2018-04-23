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
import DashboardContent from './Dashboard/DashboardContent';
import SideFeed from './Dashboard/SideFeed';

export default class Dashboard extends Component {

  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div id="dashboard">
        <DashboardAppBar toggleVisibility={this.toggleVisibility} />
        <div className="dashboard-content">
          <div className="dashboard-main-content">
            <DashboardContent visible={this.state.visible} />
          </div>
          <div className="dashboard-side-feed">
          <SideFeed />
          </div>
        </div>
      </div>
    );
  }
}