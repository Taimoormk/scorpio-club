// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import ChatBot from 'react-simple-chatbot';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

export default class Chat extends Component {
  render() {
    return (
      <div id="chat">
        <ChatBot
          steps={[
            {
              id: 'hello-world',
              message: 'Hello World!',
              end: true,
            },
          ]}
        />
      </div>
    )
  }
}