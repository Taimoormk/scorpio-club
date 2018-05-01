import React from 'react';
import DashboardMainContent from './DashboardMainContent';

const DashboardHome = (props) => {
    const { visible, toggleVisibility } = props;
    return (
      <div id="dashboard-home">
        <DashboardMainContent
          {...props}
          // visible={visible}
          // toggleVisibility={toggleVisibility}
        />
      </div>
    );
  }

export default DashboardHome;