// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { Grid, Image, Label, Segment, Menu } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Tshirts from './Tshirts';
import Hoodies from './Hoodies';

const MarketplaceProducts = (props) => {
  const {
    toggleMarketplaceMenu,
    switchMarketplaceMenuAction,
    toggleSharePortal,
    openSharePortalAction,
    closeSharePortalAction
  } = props;
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
              onClick={() => switchMarketplaceMenuAction('hoodies')}
            />
            <Menu.Item
              name='etc'
              active={toggleMarketplaceMenu.activeItem === 'etc'}
              onClick={() => switchMarketplaceMenuAction('hoodies')}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={14}>
          <Segment>
            {toggleMarketplaceMenu.activeItem === 'tshirts' && <Tshirts {...props} />}
            {toggleMarketplaceMenu.activeItem === 'hoodies' && <Hoodies {...props} />}
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}

export default MarketplaceProducts;