import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';

const Marketplace = (props) => {
  const { visible, breadcrumbs } = props;
  console.log('marketplace',props);
  return (
    <div id="marketplace">
      <Sidebar.Pushable className="marketplace-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="marketplace-content-heading">Marketplace</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="marketplace-content-subheading">Welcome, Name Surname</Header>
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Marketplace;