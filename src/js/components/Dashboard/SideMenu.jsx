import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import DashboardMenuData from './DashboardMenuData';

class SideMenu extends Component {

  renderSideMenu = () => (
    // const { toggleVisibility } = props;
    DashboardMenuData.map((item, index) => {
      const menuItem = DashboardMenuData[index];
      return (
        <Menu.Item id={menuItem.id} name={menuItem.menuItemName}>
          <Icon
            name={menuItem.menuIconName}
          // onClick={toggleVisibility} 
          />
          <Link to={menuItem.menuLinkTo}>{menuItem.menuDisplay}</Link>
        </Menu.Item>
      )
    })
  )

  render() {
    return (
      <div id="side-menu">
        {this.renderSideMenu()}
      </div>
    );
  }
}

export default SideMenu;