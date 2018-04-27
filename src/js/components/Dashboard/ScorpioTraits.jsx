import React from 'react'
import { Grid, Image, Segment, Card } from 'semantic-ui-react';
import ScorpioTraitsUser from './ScorpioTraitsUser';

const ScorpioTraits = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={3} centered>
      <ScorpioTraitsUser />
      <ScorpioTraitsUser />
      <ScorpioTraitsUser />
    </Grid.Row>
    <Grid.Row columns={3} centered>
      <ScorpioTraitsUser />
      <ScorpioTraitsUser />
      <ScorpioTraitsUser />
    </Grid.Row>
  </Grid>
)

export default ScorpioTraits;