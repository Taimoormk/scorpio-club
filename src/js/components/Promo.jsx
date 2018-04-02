// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Promo extends Component {
  
  componentDidMount() {

  }

  render() {
    const { promoData } = this.props;
    return (
      <section id="promo">
        <div className="wrapper">
          <h3 className="promo-heading">{promoData.postTitle}</h3>
          <div className="promo-content-container">
            <div className="promo-image-container">
              <div className="promo-image">
                <img src={promoData.postImage} width="600px" alt="Scorpio Club Promo" />
              </div>
            </div>
            <div className="promo-text-container">
              <p className="promo-text">{promoData.postDescription}</p>
            </div>
            <div className="clear" />
          </div>
        </div>
      </section>
    );
  }
}

Promo.propTypes = {
  promoData: shape({
    postTitle: string.isRequired,
    postImage: string.isRequired,
    postDescription: string.isRequired
  }).isRequired,
}

// function mapStateToProps(state) {
//   return {
//     key: null
//   };
// };

export default connect(null, {})(Promo);