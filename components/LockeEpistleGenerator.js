import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Footer from './Footer'
import ProfileAppBar from './ProfileAppBar'
import SentenceGeneratorCard from './SentenceGeneratorCard'
import useNgramsDistribution from '../src/useNgramsDistribution'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingBottom: '100%',
    paddingTop: spacing(2)
  }
}))

const LockeEpistleGenerator = props => {
  const {
    container: containerClass
  } = useStyles()

  const distribution = useNgramsDistribution('lockesEpistle')

  return (
    <>
      <ProfileAppBar {...props} />

      <Fade in>
        <Container className={containerClass}>
          <SentenceGeneratorCard {...{ distribution }} />
        </Container>
      </Fade>

      <Slide direction='up' in>
        <Footer />
      </Slide>
    </>
  )
}

export default LockeEpistleGenerator
