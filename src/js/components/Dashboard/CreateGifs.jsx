// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import gifshot from 'gifshot';
import { Sidebar, Segment, Header, Menu, Grid, Image } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Breadcrumbs from './Breadcrumbs';
import SideMenu from './SideMenu';
import Steps from './CreateGifs/Steps';
import GifForm from './CreateGifs/GifForm';

export default class CreateGifs extends Component {

  createGif = () => {
    gifshot.createGIF({
      gifWidth: 500,
      gifHeight: 500,
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
    const { visible, breadcrumbs } = this.props;
    return (
      <div id="create-gifs">
        <Sidebar.Pushable className="create-gifs-main-content" as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <SideMenu />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment.Group raised>
              <Segment>
                <Breadcrumbs
                  breadcrumbs={breadcrumbs}
                />
                <Header as='h3' className="create-gifs-content-heading">Create Gifs</Header>
              </Segment>
              <Segment textAlign='center'>
                <Header as='h4' className="create-gifs-content-subheading">Welcome, Name Surname</Header>
              </Segment>
              <Steps />
              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <GifForm />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Image src='/images/patrick.png' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment.Group>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}