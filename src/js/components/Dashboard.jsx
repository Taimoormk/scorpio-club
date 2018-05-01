// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import { arrayOf, shape, func, bool } from 'prop-types';
// import { connect } from 'react-redux';
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
import DashboardMenuData from './Dashboard/DashboardMenuData';

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
            <Scrollbars>
              <Switch>
                <Route
                  path="/dashboard/profile"
                  render={
                    function (routeProps) {
                      return (
                        <Profile
                          visible={visible}
                          breadcrumbs='Profile'
                          // toggleVisibility={toggleVisibility}
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
                          visbible={visible}
                          breadcrumbs='Create Gifs'
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
                          visible={visible}
                          breadcrumbs='Notable Scorpios'
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
                          visibile={visible}
                          breadcrumbs='From Our Scorpios'
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
                          visibile={visible}
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
                          visible={visible}
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
                          visibile={visible}
                          breadcrumbs='Settings'
                          {...routeProps}
                        />
                      )
                    }
                  }
                />
                {/* <Route path="/dashboard/create-gifs" component={CreateGifs} /> */}
                {/* <Route path="/dashboard/notable-scorpios" component={NotableScorpios} /> */}
                {/* <Route path="/dashboard/from-our-scorpios" component={FromOurScorpios} /> */}
                {/* <Route path="/dashboard/share-scorpio-traits" component={ShareScorpioTraits} /> */}
                {/* <Route path="/dashboard/marketplace" component={Marketplace} /> */}
                {/* <Route path="/dashboard/settings" component={Settings} /> */}
                <Route
                  path="/dashboard"
                  toggleVisibility={this.toggleVisibility}
                  render={
                    function (routeProps, props) {
                      // console.log('Dashboard', props);
                      // const { toggleVisibility } = props;
                      return (
                        <DashboardHome
                          visible={visible}
                          breadcrumbs='Dashboard'
                          // toggleVisibility={toggleVisibility}
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