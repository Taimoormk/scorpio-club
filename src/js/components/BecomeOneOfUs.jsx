// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class BecomeOneOfUs extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="become-one-of-us">
        <div className="wrapper">
          <h3 className="become-one-of-us-heading">Become One Of Us</h3>
          <h4 className="become-one-of-us-subheading">Society excited by cottage private an it esteems. Fully begin on by wound an. <br /> Girl rich in do up or both. At declared in as rejoiced of together.</h4>
          <button className="become-one-of-us-button">See More</button>
          <div className="filler"></div>
        </div>
      </section>
    );
  }
}

BecomeOneOfUs.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(BecomeOneOfUs);