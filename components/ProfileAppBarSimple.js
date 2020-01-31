import React from 'react'
import Slide from '@material-ui/core/Slide'
import AppBarFixed from './AppBarFixed'
import Title from './Title'

const ProfileAppBarSimple = ({ ToggleDarkLightButton }) => (
  <Slide in>
    <div>
      <AppBarFixed color='default'>
        <Title text='Profile' />

        <ToggleDarkLightButton />
      </AppBarFixed>
    </div>
  </Slide>
)

export default ProfileAppBarSimple
