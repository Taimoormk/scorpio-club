// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardAppBar from './Dashboard/DashboardAppBar';
import SideFeed from './Dashboard/SideFeed';
import Profile from './Dashboard/Profile';
import CreateGifs from './Dashboard/CreateGifs';
import NotableScorpios from './Dashboard/NotableScorpios';
import FromOurScorpios from './Dashboard/FromOurScorpios';
import ShareScorpioTraits from './Dashboard/ShareScorpioTraits';
import Marketplace from './Dashboard/Marketplace';
import Settings from './Dashboard/Settings';
import Ad from './Dashboard/Ad';
import DashboardHome from './Dashboard/DashboardHome';
import * as actions from '../actions';

class Dashboard extends Component {

  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    const { toggleSideMenu, activateSideMenuAction, deactivateSideMenuAction } = this.props;
    return (
      <div id="dashboard">
        <DashboardAppBar
          toggleVisibility={this.toggleVisibility}
          activateSideMenuAction={activateSideMenuAction}
        />
        <div className="dashboard-content">
          <div className="dashboard-main-content">
            <Scrollbars>
              <Switch>
                <Route
                  path="/dashboard/profile"
                  render={
                    function (routeProps) {
                      return (
                        <Profile
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Profile'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/create-gifs"
                  render={
                    function (routeProps) {
                      return (
                        <CreateGifs
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Create Gifs'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/from-our-scorpios"
                  render={
                    function (routeProps) {
                      return (
                        <FromOurScorpios
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='From Our Scorpios'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/notable-scorpios"
                  render={
                    function (routeProps) {
                      return (
                        <NotableScorpios
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Notable Scorpios'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/share-scorpio-traits"
                  render={
                    function (routeProps) {
                      return (
                        <ShareScorpioTraits
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Share Scorpio Traits'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/marketplace"
                  render={
                    function (routeProps) {
                      return (
                        <Marketplace
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Marketplace'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard/settings"
                  render={
                    function (routeProps) {
                      return (
                        <Settings
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Settings'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                <Route
                  path="/dashboard"
                  toggleVisibility={this.toggleVisibility}
                  render={
                    function (routeProps) {
                      return (
                        <DashboardHome
                          visible={toggleSideMenu.sideMenuActive}
                          breadcrumbs='Home'
                          deactivateSideMenuAction={deactivateSideMenuAction}
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
              </Switch>
            </Scrollbars>
          </div>
          <div className="dashboard-side-feed">
            <Scrollbars>
              <SideFeed />
              <Ad />
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ toggleSideMenuReducer }) {
  return {
    toggleSideMenu: toggleSideMenuReducer
  }
}

export default connect(mapStateToProps, {
  activateSideMenuAction: actions.activateSideMenuAction,
  deactivateSideMenuAction: actions.deactivateSideMenuAction
})(Dashboard);