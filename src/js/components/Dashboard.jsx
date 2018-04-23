// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

export default class Dashboard extends Component {
  render() {
    return(
      <div id="dashboard">
        Dashboard
      </div>
    );
  }
}