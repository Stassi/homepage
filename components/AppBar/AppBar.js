import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({ ToggleDarkLightButton }) => (
  <Slide in>
    <MuiAppBar color='default' position='static'>
      <Toolbar>
        <MenuButton />

        <Title {...{ text: '' }} />

        <ToggleDarkLightButton />
      </Toolbar>
    </MuiAppBar>
  </Slide>
)

export default AppBar
