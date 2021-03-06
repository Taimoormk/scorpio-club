// ########## Import Dependencies Here ##########
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import * as options from './GifFormData';
import GifLabeledInput from './GifLabeledInput';
import GifInput from './GifInput';

const GifForm = () => {
  return (
    <div id="gif-form">
      <Dropdown placeholder='GIF Source' fluid selection options={options.gifSourceOptions} />
      <Dropdown placeholder='GIF Type' fluid selection options={options.gifType} />
      <GifLabeledInput
        label='px'
        placeholder='GIF Width'
      />
      <GifLabeledInput
        label='px'
        placeholder='GIF Height'
      />
      <GifLabeledInput
        label='secs'
        placeholder='Interval'
      />
      <GifInput
        type='number'
        placeholder='Number of Frames'
      />
      <GifInput
        type='number'
        placeholder='Frame Duration'
      />
      <GifInput
        type='text'
        placeholder='GIF Text'
      />
      <Dropdown placeholder='Font Weight' fluid selection options={options.gifFontWeight} />
      <GifLabeledInput
        label='px'
        placeholder='Font Size'
      />
      <Dropdown placeholder='Font Family' fluid selection options={options.gifFontFamily} />
      <Dropdown placeholder='Text Align' fluid selection options={options.gifTextAlign} />
      <Dropdown placeholder='Text Baseline' fluid selection options={options.gifTextBaseline} />
      <GifInput
        type='number'
        placeholder='Sample Interval'
      />
      <GifInput
        type='number'
        placeholder='Num Workers'
      />
    </div>
  );
}

export default GifForm;