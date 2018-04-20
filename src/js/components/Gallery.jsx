// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Gallery extends Component {

  static propTypes = {
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

  static defaultProps = {
    fromOurScorpiosData: null,
    someNotableScorpiosData: null
  }

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
        const postCategoty = fromOurScorpiosData[k].postCategory;
        const postDate = fromOurScorpiosData[k].postDate;
        return (
          <div
            key={k}
            className="from-our-scorpios-gallery"
          >
            <div className="from-our-scorpio-gallery-item">
              <div className="from-our-scorpio-gallery-item-overlay"></div>
              <img
                src={postImg}
                className="from-our-scorpios-gallery-image"
                alt="from our scorpios gallery item"
                onMouseEnter={() => this.fromOurScorpiosonMouseEnterHandler()}
                onMouseLeave={() => this.fromOurScorpiosonMouseLeaveHandler()}
              />
              <div className="from-our-scorpios-gallery-overlay-content">
                <h4 className="from-our-scorpios-gallery-overlay-category">{postCategoty}</h4>
                <p className="from-our-scorpios-gallery-overlay-date">{postDate}</p>
              </div>
            </div>
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

export default Gallery;