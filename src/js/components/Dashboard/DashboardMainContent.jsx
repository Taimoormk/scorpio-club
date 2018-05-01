import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';
import ScorpioTraits from './ScorpioTraits';
import ScorpioGifs from './ScorpioGifs';

const DashboardMainContent = (props) => {
  const { visible, breadcrumbs, toggleVisibility } = props;
  return (
    <div id="dashboard-main-content">
      <Sidebar.Pushable className="dashboard-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu 
            toggleVisibility={toggleVisibility}
          />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs 
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="dashboard-content-heading">Dashboard</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="dashboard-content-subheading">Latest Scorpio Traits</Header>
              <ScorpioTraits />
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="dashboard-content-subheading">Latest Scorpio Gifs</Header>
              <ScorpioGifs />
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default DashboardMainContent;