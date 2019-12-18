import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import AppBar from './AppBar'
import Footer from './Footer'
import ProfileCard from './ProfileCard'

const useStyles = makeStyles(({ spacing }) => ({
  cardContainer: {
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
    cardContainer: cardContainerClass,
    grow: growClass,
    root: rootClass
  } = useStyles()

  return (
    <div className={rootClass}>
      <Fade in>
        <div>
          <AppBar {...props} />

          <Container className={cardContainerClass}>
            <ProfileCard {...props} />
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
