// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Gallery extends Component {

  fromOurScorpiosonMouseEnterHandler() {
    // console.log('fromOurScorpiosonMouseEnterHandler');
  }

  fromOurScorpiosonMouseLeaveHandler() {
    // console.log('fromOurScorpiosonMouseLeaveHandler');
  }

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
              onMouseEnter={() => this.fromOurScorpiosonMouseEnterHandler()}
              onMouseLeave={() => this.fromOurScorpiosonMouseLeaveHandler()}
            />
          </div>
        )
      })
    )
  }

  someNotableScorpiosonMouseEnterHandler() {
    // console.log('someNotableScorpiosonMouseEnterHandler');
  }

  someNotableScorpiosonMouseLeaveHandler() {
    // console.log('someNotableScorpiosonMouseLeaveHandler');
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
              onMouseEnter={() => this.someNotableScorpiosonMouseEnterHandler()}
              onMouseLeave={() => this.someNotableScorpiosonMouseLeaveHandler()}
            />
          </div>
        )
      })
    )
  }

  render() {
    const { sectionTitle } = this.props;
    return (
      <div id="gallery">
        {
          sectionTitle === "From Our Scorpios" && this.fromOurScorpiosRender()
          ||
          sectionTitle === "Some Notable Scorpios" && this.someNotableScorpiosRender()
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  sectionTitle: string.isRequired,
  fromOurScorpiosData: arrayOf(
    shape({
      postImg: string,
    })
  ),
  someNotableScorpiosData: arrayOf(
    shape({
      postImg: string,
    })
  ),
}

Gallery.defaultProps = {
  fromOurScorpiosData: null,
  someNotableScorpiosData: null
}

export default Gallery;