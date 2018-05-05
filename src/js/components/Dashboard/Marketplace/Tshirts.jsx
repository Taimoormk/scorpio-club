// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { Grid, Image, Label, Segment, Menu } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Tshirts = () => {
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
                <Label as='a' color='orange'>TShirts</Label>
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
    </Fragment>
  );
}

export default Tshirts;