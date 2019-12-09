import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuButton from './MenuButton'
import MoreButton from './MoreButton'
import Title from './Title'

const AppBar = () => (
  <MuiAppBar color='default' position='static'>
    <Toolbar>
      <MenuButton />

      <Title {...{ text: '' }} />

      <MoreButton />
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
