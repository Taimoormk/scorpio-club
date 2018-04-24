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

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardAppBar from './Dashboard/DashboardAppBar';
import DashboardMainContent from './Dashboard/DashboardMainContent';
import SideFeed from './Dashboard/SideFeed';
import Profile from './Dashboard/Profile';
import Gifs from './Dashboard/Gifs';

export default class Dashboard extends Component {

  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div id="dashboard">
        <DashboardAppBar 
          toggleVisibility={this.toggleVisibility} 
        />
        <div className="dashboard-content">
          <div className="dashboard-main-content">
            <Router>
              <Switch>
                <Route exact path="/dashboard/profile" component={Profile} />
                <Route exact path="/dashboard/gifs" component={Gifs} />
                <Route
                  path="/dashboard"
                  render={
                    function (routeProps) {
                      return (
                        <DashboardMainContent
                          visible={visible}
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
              </Switch>
            </Router>
          </div>
          <div className="dashboard-side-feed">
            <SideFeed />
          </div>
        </div>
      </div>
    );
  }
}