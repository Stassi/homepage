import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({ ToggleDarkLightButton }) => (
  <MuiAppBar color='default' position='static'>
    <Toolbar>
      <MenuButton />

      <Title {...{ text: '' }} />

      <ToggleDarkLightButton />
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
