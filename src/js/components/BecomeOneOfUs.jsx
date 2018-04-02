// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class BecomeOneOfUs extends Component {

  componentDidMount() {

  }

  render() {
    const { becomeOneOfUs } = this.props;
    return (
      <section id="become-one-of-us">
        <div className="wrapper">
          <h3 className="become-one-of-us-heading">{becomeOneOfUs.sectionHeading}</h3>
          <h4 className="become-one-of-us-subheading">{becomeOneOfUs.sectionH3}</h4>
          <button className="become-one-of-us-button">{becomeOneOfUs.sectionButtonText}</button>
          <div className="filler" />
        </div>
      </section>
    );
  }
}

BecomeOneOfUs.propTypes = {
}

// function mapStateToProps(state) {
//   return {
//     key: null
//   };
// };

export default connect(null, {})(BecomeOneOfUs);