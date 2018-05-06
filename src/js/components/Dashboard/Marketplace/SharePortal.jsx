// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import * as actions from '../../../actions';
import SocialShare from '../SocialShare';

const SharePortal = (props) => {
    const { closeSharePortalAction, toggleSharePortal } = props;
    return (
      <Fragment>
        <Portal onClose={closeSharePortalAction} open={toggleSharePortal.portalActive}>
          <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
            <Header>Share our content with the world</Header>
            <SocialShare />
          </Segment>
        </Portal>
      </Fragment>
    );
  }

export default SharePortal;