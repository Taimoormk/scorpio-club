// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { Grid, Image, Label, Segment, Menu, SegmentGroup, Header, Divider } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import ProductButton from './ProductButton';

const Tshirts = () => {
  return (
    <Fragment>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Segment.Group>
              <Segment>
                <Image
                  src='/images/patrick.png'
                  label={{ as: 'a', color: 'blue', content: '$10.00', icon: 'spoon', ribbon: 'right' }}
                />
              </Segment>
              <Segment>
                <Header as='h4'>Fourth Header</Header>
                <Header.Subheader>A para to describe about the product that you are about to make purchase.</Header.Subheader>
                <Divider />
                <ProductButton />
              </Segment>
            </Segment.Group>
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