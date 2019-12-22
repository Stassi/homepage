import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import { ngramsDistribution } from 'markovian-nlp'
import Footer from './Footer'
import ProfileAppBar from './ProfileAppBar'
import SentenceGeneratorCard from './SentenceGeneratorCard'
import lockesEpistle from '../src/corpora/lockesEpistle'

const distribution = ngramsDistribution(lockesEpistle)

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingBottom: '100%',
    paddingTop: spacing(2)
  },
  root: {}
}))

const LockeEpistleGenerator = props => {
  const {
    container: containerClass,
    root: rootClass
  } = useStyles()

  return (
    <>
      <ProfileAppBar {...props} />

      <div className={rootClass}>
        <Fade in>
          <Container className={containerClass}>
            <SentenceGeneratorCard {...{ distribution }} />
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
