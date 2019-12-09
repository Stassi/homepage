import React from 'react'
import AppBar from './AppBar'
import Content from './Content'

const Layout = props => (
  <>
    <AppBar {...props} />
    <Content {...props} />
  </>
)

export default Layout
