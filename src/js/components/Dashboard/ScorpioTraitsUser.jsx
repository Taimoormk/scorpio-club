import React, { Component } from 'react';
import { Grid, Card, Segment, Image } from 'semantic-ui-react';

export default class ScorpioTraitsUser extends Component {
  render() {
    return (
      <Grid.Column computer={5} mobile={8}>
        <Card>
          <Card.Content>
            <Image circular floated='left' size='tiny' src='./images/patrick.png' />
            <Card.Header>
              Steve Sanders
            </Card.Header>
            <Card.Description>
              <Segment attached textAlign='left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Segment>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}