import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Fade from '@material-ui/core/Fade'
import Toolbar from '@material-ui/core/Toolbar'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({ ToggleDarkLightButton }) => (
  <MuiAppBar color='default' position='static'>
    <Toolbar>
      <MenuButton />

      <Title {...{ text: '' }} />

      <Fade in timeout={1000}>
        <ToggleDarkLightButton />
      </Fade>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
