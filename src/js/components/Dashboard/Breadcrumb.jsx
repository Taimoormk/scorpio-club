import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const Breadcrumbs = (props) => {
  const { breadcrumbs } = props;
  return(
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section active>{breadcrumbs}</Breadcrumb.Section>
  </Breadcrumb>
  );
}

export default Breadcrumbs;