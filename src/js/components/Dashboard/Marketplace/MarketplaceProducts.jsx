// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from 'react';
import { Grid, Image, Label, Segment, Menu } from 'semantic-ui-react';
import Tshirts from './Tshirts';
import Hoodies from './Hoodies';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class MarketplaceProducts extends Component {

  state = { activeItem: 'tshirts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Fragment>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Segment>
                <Image
                  src='/images/patrick.png'
                  label={{ as: 'a', corner: 'left', icon: 'shop' }}
                />
                <Label.Group tag>
                  <Label as='a' color='red'>$10.00</Label>
                </Label.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='/images/patrick.png' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='/images/patrick.png' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src='/images/patrick.png' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={2}>
            <Menu fluid vertical tabular>
              <Menu.Item name='tshirts' active={activeItem === 'tshirts'} onClick={this.handleItemClick} />
              <Menu.Item name='hoodies' active={activeItem === 'hoodies'} onClick={this.handleItemClick} />
              <Menu.Item name='mugs' active={activeItem === 'mugs'} onClick={this.handleItemClick} />
              <Menu.Item name='etc' active={activeItem === 'etc'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={14}>
            <Segment>
              { activeItem === 'tshirts' && <Tshirts /> }
              { activeItem === 'hoodies' && <Hoodies /> }
            </Segment>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default MarketplaceProducts;