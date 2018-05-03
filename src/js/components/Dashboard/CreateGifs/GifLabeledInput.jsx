import React from 'react';
import { Input } from 'semantic-ui-react';

const GifLabeledInput = (props) => {
  const { label, placeholder } = props;
  return (
    <Input
      fluid
      label={label}
      labelPosition='right'
      placeholder={placeholder}
    />
  );
}

export default GifLabeledInput;