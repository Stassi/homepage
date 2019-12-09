import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProfileCard from './ProfileCard'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(2)
  }
}))

const Content = () => {
  const { root: rootClass } = useStyles()

  return (
    <Container className={rootClass}>
      <Grid container>
        <Grid item xs>
          <ProfileCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content
