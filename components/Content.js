import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import ProfileCard from './ProfileCard'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(2)
  }
}))

const Content = props => {
  const { root: rootClass } = useStyles()

  return (
    <Fade in>
      <Container className={rootClass}>
        <Grid container>
          <Grid item xs>
            <ProfileCard {...props} />
          </Grid>
        </Grid>
      </Container>
    </Fade>
  )
}

export default Content
