// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import gifshot from 'gifshot';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class CreateGifs extends Component {

  createGif = () => {
    gifshot.createGIF({
      gifWidth: 200,
      gifHeight: 200,
      interval: 0.1,
      numFrames: 10,
      frameDuration: 1,
      fontWeight: 'normal',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      textBaseline: 'bottom',
      sampleInterval: 10,
      numWorkers: 2
    }, function (obj) {
      if (!obj.error) {
        var image = obj.image, animatedImage = document.createElement('img');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
      }
    });
  }

  render() {
    return (
      <div id="create-gifs">
        Create Gifs
        {this.createGif()}
      </div>
    );
  }
}

export default CreateGifs;