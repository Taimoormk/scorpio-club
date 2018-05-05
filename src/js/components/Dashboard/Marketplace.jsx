// ########## Import Dependencies Here ##########
import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Breadcrumbs from './Breadcrumbs';
import SideMenu from './SideMenu';
import MarketplaceProducts from './Marketplace/MarketplaceProducts';

const Marketplace = (props) => {
  const { visible, breadcrumbs } = props;
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
            <Segment textAlign='center'>
              <MarketplaceProducts />
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Marketplace;