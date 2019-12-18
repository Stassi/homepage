import React from 'react'
import Slide from '@material-ui/core/Slide'
import AppBarFixed from './AppBarFixed'
import MenuButton from './MenuButton'
import Title from './Title'
import TranslationMenu from './TranslationMenu'

const AppBar = ({ ToggleDarkLightButton, ...props }) => (
  <Slide in>
    <div>
      <AppBarFixed color='default'>
        <MenuButton />

        <Title />

        <TranslationMenu {...props} />

        <ToggleDarkLightButton />
      </AppBarFixed>
    </div>
  </Slide>
)

export default AppBar
