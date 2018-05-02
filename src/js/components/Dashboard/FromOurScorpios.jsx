import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';

const FromOurScorpios = (props) => {
  const { visible, breadcrumbs } = props;
  console.log('fromourscorpios',props);
  return (
    <div id="from-our-scorpios">
      <Sidebar.Pushable className="from-our-scorpios-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="from-our-scorpios-content-heading">From Our Scorpios</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="from-our-scorpios-content-subheading">Welcome, Name Surname</Header>
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default FromOurScorpios;