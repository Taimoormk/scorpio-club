// ########## Import Dependencies Here ##########
import React from 'react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardMainContent from './DashboardMainContent';

const DashboardHome = (props) => (
  <div id="dashboard-home">
    <DashboardMainContent
      {...props}
    />
  </div>
);

export default DashboardHome;