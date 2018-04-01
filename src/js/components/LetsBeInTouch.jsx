// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class LetsBeInTouch extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <section id="lets-be-in-touch">
        <div className="wrapper">
          <h3 className="lets-be-in-touch-heading">Lets be in Touch</h3>
          <h4 className="lets-be-in-touch-subheading">Society excited by cottage private an it esteems. Fully begin on by wound an. <br />Girl rich in do up or both. At declared in as rejoiced of together.</h4>
          <form className="lets-be-in-touch-form" action="">
            <input className="lets-be-in-touch-input" type="text" placeholder="Name" name="name" />
            <input className="lets-be-in-touch-input" type="email" placeholder="Email" name="email" />            
            <input className="lets-be-in-touch-button" type="submit" value="Submit" />
          </form>
          <div className="filler" />
        </div>
      </section>
    );
  }
}

// LetsBeInTouch.propTypes = {
// }

// function mapStateToProps(state) {
//   return {
//     key: null
//   };
// };

export default connect(null, {})(LetsBeInTouch);