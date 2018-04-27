import React from 'react'
import { Grid, Image, Segment, Card } from 'semantic-ui-react';
import ScorpioGifsUser from './ScorpioGifsUser';

const ScorpioGifs = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={3} centered>
      <ScorpioGifsUser />
      <ScorpioGifsUser />
      <ScorpioGifsUser />
    </Grid.Row>
    <Grid.Row columns={3} centered>
      <ScorpioGifsUser />
      <ScorpioGifsUser />
      <ScorpioGifsUser />
    </Grid.Row>
  </Grid>
)

export default ScorpioGifs;