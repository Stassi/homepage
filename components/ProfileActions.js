import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from './Icon'

const useStyles = makeStyles({
  maxHeight: {
    height: '100%'
  }
})

const ProfileActions = ({ router }) => {
  const {
    maxHeight: maxHeightClass
  } = useStyles()

  return (
    <Grid
      alignItems='stretch'
      container
      item
      spacing={1}
    >
      <Grid item xs>
        <Button
          color='primary'
          fullWidth
          onClick={ev => {
            ev.preventDefault()
            window.location = 'https://github.com/Stassi'
          }}
          startIcon={<Icon name='github' />}
          variant='contained'
        >
          View GitHub profile
        </Button>
      </Grid>

      <Grid item xs>
        <Button
          className={maxHeightClass}
          color='default'
          fullWidth
          onClick={ev => {
            ev.preventDefault()
            // TODO: Replace file with static route
            router.push('/andreas-stassivik-resume.pdf')
          }}
          startIcon={<Icon name='fileDownload' />}
          variant='outlined'
        >
          Download résumé
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProfileActions
