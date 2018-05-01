import React from 'react';
import { Grid, Card, Segment, Image, Rating } from 'semantic-ui-react';

const ScorpioTraitsUser = () => (
  <Grid.Column computer={5} mobile={8}>
    <Card>
      <Card.Content>
        <Image circular floated='left' size='tiny' src='/images/patrick.png' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            November, 16<sup>th</sup>
          </span>
          <Rating icon='heart' defaultRating={0} maxRating={5} />
        </Card.Meta>
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

export default ScorpioTraitsUser;