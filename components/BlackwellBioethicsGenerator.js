import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Footer from './Footer'
import ProfileAppBar from './ProfileAppBar'
import BlackwellBioethicsGeneratorCard from './BlackwellBioethicsGeneratorCard'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingBottom: '100%',
    paddingTop: spacing(2)
  },
  root: {}
}))

const BlackwellBioethicsGenerator = ({ localization, ...props }) => {
  const {
    container: containerClass,
    root: rootClass
  } = useStyles()

  return (
    <>
      <ProfileAppBar {...{ localization, ...props }} />

      <div className={rootClass}>
        <Fade in>
          <Container className={containerClass}>
            <BlackwellBioethicsGeneratorCard />
          </Container>
        </Fade>

        <Slide direction='up' in>
          <Footer />
        </Slide>
      </div>
    </>
  )
}

export default BlackwellBioethicsGenerator
