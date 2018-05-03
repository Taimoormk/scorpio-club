// ########## Import Dependencies Here ##########
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Breadcrumbs = (props) => {
  const { breadcrumbs } = props;
  return(
    <Breadcrumb>
      <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle' />
      <Breadcrumb.Section><Link to="/dashboard">Dashboard</Link></Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle' />
      <Breadcrumb.Section active>{breadcrumbs}</Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default Breadcrumbs;