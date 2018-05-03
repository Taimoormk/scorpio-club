import React from 'react';
import { Input, Label } from 'semantic-ui-react';

const GifInput = (props) => {
  const { type, placeholder } = props;
  return (
    <div id="gif-input">
      <Input 
        fluid 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  );
}

export default GifInput;