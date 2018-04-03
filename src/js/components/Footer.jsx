// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Footer = (props) => {
  const { footer } = props;
  return (
    <section id="footer">
      <div className="wrapper">
        <div className="footer-container-left">
          <p className="footer-heading">{footer.sectionHeading}</p>
          <p className="footer-disclaimer">{footer.sectionPara}</p>
        </div>
        <div className="footer-container-right">
          <p className="footer-heading" />
          <div className="footer-disclaimer">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-2x" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x" /></a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </section>
  );
}


Footer.propTypes = {
  footer: shape({
    sectionHeading: string.isRequired,
    sectionPara: string.isRequired,
  }).isRequired,
}


export default Footer;