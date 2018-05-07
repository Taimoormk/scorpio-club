// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from 'react';
import { Grid, Image, Label, Segment, Menu } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Tshirts from './Tshirts';
import Hoodies from './Hoodies';

class MarketplaceProducts extends Component {
  render() {
    const { toggleMarketplaceMenu, switchMarketplaceMenuAction } = this.props;
    return (
      <Fragment>
        <Grid>
          <Grid.Column width={2}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='tshirts'
                active={toggleMarketplaceMenu.activeItem === 'tshirts'}
                onClick={() => switchMarketplaceMenuAction('thsirts')}
              />
              <Menu.Item
                name='hoodies'
                active={toggleMarketplaceMenu.activeItem === 'hoodies'}
                onClick={() => switchMarketplaceMenuAction('hoodies')}
              />
              <Menu.Item
                name='mugs'
                active={toggleMarketplaceMenu.activeItem === 'mugs'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='etc'
                active={toggleMarketplaceMenu.activeItem === 'etc'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={14}>
            <Segment>
              {toggleMarketplaceMenu.activeItem === 'tshirts' && <Tshirts />}
              {toggleMarketplaceMenu.activeItem === 'hoodies' && <Hoodies />}
            </Segment>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default MarketplaceProducts;