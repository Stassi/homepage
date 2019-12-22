import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import AppBar from './AppBar'
import BlackwellPortraitCard from './BlackwellPortraitCard'
import Footer from './Footer'
import LockePortraitCard from './LockePortraitCard'
import NumberGeneratorCard from './NumberGeneratorCard'
import ProfileCard from './ProfileCard'

const useStyles = makeStyles(({ spacing }) => ({
  cardsContainer: {
    paddingBottom: spacing(8),
    paddingTop: spacing(2)
  },
  grow: {
    flexGrow: 1
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}))

const Layout = props => {
  const {
    cardsContainer: cardsContainerClass,
    grow: growClass,
    root: rootClass
  } = useStyles()

  return (
    <div className={rootClass}>
      <Fade in>
        <div>
          <AppBar {...props} />

          <Container className={cardsContainerClass}>
            <Grid alignItems='center' container spacing={2}>
              <Grid item sm xs={12}>
                <BlackwellPortraitCard {...props} />
              </Grid>

              <Grid item sm xs={12}>
                <LockePortraitCard {...props} />
              </Grid>

              <Grid item sm xs={12}>
                <ProfileCard {...props} />
              </Grid>

              <Grid item xs>
                <NumberGeneratorCard {...props} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>

      <div className={growClass} />

      <Slide direction='up' in>
        <Footer />
      </Slide>
    </div>
  )
}

export default Layout
