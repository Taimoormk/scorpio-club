import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';

const ShareScorpioTraits = (props) => {
  const { visible, breadcrumbs } = props;
  return (
    <div id="share-scorpio-traits">
      <Sidebar.Pushable className="share-scorpio-traits-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="share-scorpio-traits-content-heading">Share Scorpio Traits</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="share-scorpio-traits-content-subheading">Welcome, Name Surname</Header>
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default ShareScorpioTraits;