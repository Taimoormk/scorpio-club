import React, { Component } from 'react';
import DashbordMainContent from './DashboardMainContent';

export default class DashboardHome extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div id="dashboard-home">
        <DashbordMainContent
          visible={visible}
        />
      </div>
    );
  }
}