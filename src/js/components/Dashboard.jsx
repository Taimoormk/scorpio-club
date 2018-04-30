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
              {/* <DashboardMainContent
                visible={visible}
              /> */}
              <Switch>
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/dashboard/create-gifs" component={CreateGifs} />
                <Route path="/dashboard/notable-scorpios" component={NotableScorpios} />
                <Route path="/dashboard/from-our-scorpios" component={FromOurScorpios} />
                <Route path="/dashboard/share-scorpio-traits" component={ShareScorpioTraits} />
                <Route path="/dashboard/marketplace" component={Marketplace} />
                <Route path="/dashboard/settings" component={Settings} />
                <Route
                  path="/dashboard"
                  render={
                    function (routeProps) {
                      return (
                        <DashboardHome
                          visible={visible}
                          // toggleVisibility={this.toggleVisibility}
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
            <SideFeed />
            <Ad />
          </div>
        </div>
      </div>
    );
  }
}