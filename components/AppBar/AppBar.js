import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({
  handleToggleDarkLight,
  DarkenIcon,
  LightenIcon,
  theme: {
    palette: {
      type: themePaletteType
    }
  }
}) => (
  <MuiAppBar color='default' position='static'>
    <Toolbar>
      <MenuButton />

      <Title {...{ text: '' }} />

      <IconButton color='inherit' onClick={handleToggleDarkLight}>
        {themePaletteType === 'light' ? <DarkenIcon /> : <LightenIcon />}
      </IconButton>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
