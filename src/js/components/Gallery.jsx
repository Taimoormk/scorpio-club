// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Gallery extends Component {

  fromOurScorpiosRender() {
    const { fromOurScorpiosData } = this.props;
    return (
      fromOurScorpiosData.map((image, k) => {
        const postImg = fromOurScorpiosData[k].postImg;
        return (
          <div
            key={k}
            className="from-our-scorpios-gallery"
          >
            <img
              src={postImg}
              className="from-our-scorpios-gallery-item"
              alt="from our scorpios gallery item"
            />
          </div>
        )
      })
    )
  }

  someNotableScorpiosRender() {
    const { someNotableScorpiosData } = this.props;
    return (
      someNotableScorpiosData.map((image, k) => {
        const postImg = someNotableScorpiosData[k].postImg;
        return (
          <div
            key={k}
            className="some-notable-scorpios-gallery"
          >
            <img
              src={postImg}
              className="some-notable-scorpios-gallery-item"
              alt="some notable scorpios gallery item"
            />
          </div>
        )
      })
    )
  }

  render() {
    const { sectionTitle } = this.props;
    return(
      <div id="gallery">
        {
          sectionTitle === 'From Our Scorpios' && this.fromOurScorpiosRender() 
          || 
          sectionTitle === "Some Notable Scorpios" && this.someNotableScorpiosRender() 
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  sectionTitle: string.isRequired,
  fromOurScorpiosData: shape({
    postImg: string.isRequired,
  }).isRequired,
  someNotableScorpiosData: shape({
    postImg: string.isRequired,
  }).isRequired,
}

export default Gallery;