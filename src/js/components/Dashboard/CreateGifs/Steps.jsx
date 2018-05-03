import React from 'react';
import { Icon, Step } from 'semantic-ui-react';

const Steps = () => {
  return (
    <div id="steps">
      <Step.Group>
        <Step>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Create Gifs</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
  );
}

export default Steps;