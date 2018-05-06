// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { Pagination } from 'semantic-ui-react';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Pagenumbering = () => {
  return (
    <Fragment>
      <Pagination defaultActivePage={1} totalPages={10} />
    </Fragment>
  );
}

export default Pagenumbering;