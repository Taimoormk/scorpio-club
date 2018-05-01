import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ProfileDisplay = () => (
  <div id="profile-display">
    <Grid divided='vertically'>
      <Grid.Row columns={2} centered>
        <Grid.Column computer={6} mobile={8}>
          <Image src='/images/bill-gates.jpg' size='small' circular />
        </Grid.Column>
        <Grid.Column computer={6} mobile={8}>
          <h2>Taimoor <span>Khan</span></h2>
          <h3>City, Country</h3>
          <h4>November, 16<sup>th</sup></h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default ProfileDisplay;