import React from 'react'
import Slide from '@material-ui/core/Slide'
import AppBarFixed from './AppBarFixed'
import LanguageMenu from './LanguageMenu'
import MenuButton from './MenuButton'
import Title from './Title'

const AppBar = ({ ToggleDarkLightButton, ...props }) => (
  <Slide in>
    <div>
      <AppBarFixed color='default'>
        <MenuButton />

        <Title />

        <LanguageMenu {...props} />

        <ToggleDarkLightButton />
      </AppBarFixed>
    </div>
  </Slide>
)

export default AppBar
