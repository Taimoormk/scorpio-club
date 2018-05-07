// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import * as actions from '../../../actions';
import SharePortal from './SharePortal';

const ProductButton = (props) => {
  const {
    toggleSharePortal,
    openSharePortalAction,
    closeSharePortalAction
  } = props;
  return (
    <Fragment>
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Like
      </Button>
        <Label as='a' basic pointing='left'>2,048</Label>
      </Button>
      <Button as='div' labelPosition='left'>
        <Label as='a' basic pointing='right'>48</Label>
        <Button
          icon
          onClick={openSharePortalAction}
        >
          <Icon name='heart' />
          Share
        </Button>
      </Button>
      <SharePortal
        toggleSharePortal={toggleSharePortal}
        closeSharePortalAction={closeSharePortalAction}
      />
    </Fragment>
  );
}

export default ProductButton;