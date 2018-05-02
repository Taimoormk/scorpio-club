// ########## Import Dependencies Here ##########
import React from 'react';
import { Sidebar, Segment, Header, Menu } from 'semantic-ui-react';


// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Breadcrumbs from './Breadcrumb';
import SideMenu from './SideMenu';
import ScorpioTraits from './ScorpioTraits';
import ScorpioGifs from './ScorpioGifs';
import ProfileDisplay from './Profile/ProfileDisplay';

const Profile = (props) => {
  const { visible, breadcrumbs } = props;
  return (
    <div id="profile-main-content">
      <Sidebar.Pushable className="profile-main-content" as={Segment}>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <SideMenu />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment.Group raised>
            <Segment>
              <Breadcrumbs 
                breadcrumbs={breadcrumbs}
              />
              <Header as='h3' className="profile-content-heading">Profile</Header>
            </Segment>
            <Segment textAlign='center'>
              <Header as='h4' className="profile-content-subheading">Welcome, Name Surname</Header>
              <ProfileDisplay />
            </Segment>
          </Segment.Group>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Profile;