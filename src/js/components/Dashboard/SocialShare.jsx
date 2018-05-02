// ########## Import Dependencies Here ##########
import React from 'react';
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  TumblrShareCount,

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TumblrShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const SocialShare = () => {
  const shareUrl = 'http://geekmarketers.xyz';
  const title = 'GeekMarketers';
  const exampleImage = '../../../../dist/images/patrick.png';
  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
        <FacebookShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </FacebookShareCount>
      </div>
      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>

        <div className="Demo__some-network__share-count">
          &nbsp;
        </div>
      </div>
      <div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon
            size={32}
            round
          />
        </WhatsappShareButton>

        <div className="Demo__some-network__share-count">
          &nbsp;
        </div>
      </div>

      <div className="Demo__some-network">
        <GooglePlusShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <GooglePlusIcon
            size={32}
            round
          />
        </GooglePlusShareButton>

        <GooglePlusShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </GooglePlusShareCount>
      </div>

      <div className="Demo__some-network">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>

        <LinkedinShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </LinkedinShareCount>
      </div>

      <div className="Demo__some-network">
        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}/${exampleImage}`}
          windowWidth={1000}
          windowHeight={730}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon
            size={32}
            round
          />
        </PinterestShareButton>

        <PinterestShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        />
      </div>
      <div className="Demo__some-network">
        <TumblrShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon
            size={32}
            round
          />
        </TumblrShareButton>

        <TumblrShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        />
      </div>
      <div className="Demo__some-network">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon
            size={32}
            round
          />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default SocialShare;