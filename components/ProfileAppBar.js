import React from 'react'
import Slide from '@material-ui/core/Slide'
import AppBarFixed from './AppBarFixed'
import LanguageMenu from './LanguageMenu'
import Title from './Title'
import UpButton from './UpButton'

const ProfileAppBar = ({
  router,
  ToggleDarkLightButton,
  ...props
}) => (
  <Slide in>
    <div>
      <AppBarFixed color='default'>
        <UpButton
          onClick={(ev) => {
            ev.preventDefault()
            router.push('/')
          }}
        />

        <Title text='Profile' />

        <LanguageMenu {...props} />

        <ToggleDarkLightButton />
      </AppBarFixed>
    </div>
  </Slide>
)

export default ProfileAppBar
