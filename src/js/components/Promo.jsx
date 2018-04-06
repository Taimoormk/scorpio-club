// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Promo = (props) => {
  const { promoData } = props;
  return (
    <section id="promo">
      <div className="wrapper">
        <h3 className="promo-heading">{promoData.postTitle}</h3>
        <div className="promo-content-container">
          <div className="promo-image-container">
            <img className="promo-image" src={promoData.postImage} alt="Scorpio Club Promo" />
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

Promo.propTypes = {
  promoData: shape({
    postTitle: string.isRequired,
    postImage: string.isRequired,
    postDescription: string.isRequired
  }).isRequired,
}

export default Promo;