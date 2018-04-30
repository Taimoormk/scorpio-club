import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import SocialShare from './SocialShare';

const ScorpioGifsUser = () => (
  <Grid.Column computer={5} mobile={8}>
    <Card>
      <Image src='./images/patrick.png' />
      <Card.Content>
        <Card.Header>
          Matthew
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            November, 16<sup>th</sup>
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville. Matthew is a musician living in Nashville. Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <SocialShare />
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default ScorpioGifsUser;