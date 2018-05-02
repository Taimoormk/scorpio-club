// ########## Import Dependencies Here ##########
import React from 'react'
import { Grid } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
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