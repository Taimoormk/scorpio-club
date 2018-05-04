// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import DashboardMenuData from './DashboardMenuData';

class SideMenu extends Component {

  renderSideMenu = () => {
    const { deactivateSideMenuAction } = this.props;
    return (
      DashboardMenuData.map((item, index) => {
        const menuItem = DashboardMenuData[index];
        return (
          <div key={menuItem.id} onClick={deactivateSideMenuAction}>
            <Menu.Item name={menuItem.menuItemName}>
              <Icon
                name={menuItem.menuIconName}
                // onClick={deactivateSideMenuAction}
              />
              <Link onClick={deactivateSideMenuAction} to={menuItem.menuLinkTo}>{menuItem.menuDisplay}</Link>
            </Menu.Item>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div id="side-menu">
        {this.renderSideMenu()}
      </div>
    );
  }
}

export default SideMenu;