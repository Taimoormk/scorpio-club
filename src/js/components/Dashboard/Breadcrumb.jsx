import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const Breadcrumbs = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section active>Dashboard</Breadcrumb.Section>
  </Breadcrumb>
)

export default Breadcrumbs;