// ########## Import Dependencies Here ##########
import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Breadcrumbs from './Breadcrumbs';
import SideMenu from './SideMenu';

const NotableScorpios = (props) => {
  const { visible, breadcrumbs } = props;
  return (
    <div id="notable-scorpios">
      <Sidebar.Pushable className="notable-scorpios-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="notable-scorpios-content-heading">Notable Scorpios</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="notable-scorpios-content-subheading">Welcome, Name Surname</Header>
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default NotableScorpios;