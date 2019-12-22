import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Footer from './Footer'
import ProfileAppBar from './ProfileAppBar'
import LockeEpistleGeneratorCard from './LockeEpistleGeneratorCard'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingBottom: '100%',
    paddingTop: spacing(2)
  },
  root: {}
}))

const LockeEpistleGenerator = ({ localization, ...props }) => {
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
            <LockeEpistleGeneratorCard />
          </Container>
        </Fade>

        <Slide direction='up' in>
          <Footer />
        </Slide>
      </div>
    </>
  )
}

export default LockeEpistleGenerator
