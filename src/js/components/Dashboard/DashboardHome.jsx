import React from 'react';
import DashboardMainContent from './DashboardMainContent';

const DashboardHome = (props) => {
  console.log(props);
    return (
      <div id="dashboard-home">
        <DashboardMainContent
          {...props}
        />
      </div>
    );
  }

export default DashboardHome;