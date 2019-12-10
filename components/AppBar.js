import React from 'react'
import Slide from '@material-ui/core/Slide'
import AppBarFixed from './AppBarFixed'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({ ToggleDarkLightButton }) => (
  <Slide in>
    <div>
      <AppBarFixed color='default'>
        <MenuButton />

        <Title />

        <ToggleDarkLightButton />
      </AppBarFixed>
    </div>
  </Slide>
)

export default AppBar
