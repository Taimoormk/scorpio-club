import React, { Component } from 'react';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
} from 'react-share';
import SocialShare from './SocialShare';

export default class ScorpioGifsUser extends Component {
  render() {
    return (
      <Grid.Column computer={5} mobile={8}>
        <Card>
          <Image src='./images/patrick.png' />
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                November, 16<sup>th</sup>
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville. Matthew is a musician living in Nashville. Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <SocialShare />
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}