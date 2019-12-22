import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Icon from './Icon'
import useImplausibleNumber from '../src/useImplausibleNumber'

const useStyles = makeStyles({
  root: {}
})

const NumberGeneratorCard = () => {
  const {} = useStyles()

  const {
    evolve,
    generations,
    progenitor,
    reseed,
    restart,
    result,
    seed
  } = useImplausibleNumber()

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          Number generator
        </Typography>

        <Typography color='textPrimary' variant='h4'>
          Result: {result}
        </Typography>

        <Typography color='textPrimary' variant='h5'>
          Seed: {seed}
        </Typography>

        <Typography color='textPrimary' variant='h5'>
          Progenitor: {progenitor}
        </Typography>

        <Typography color='textPrimary' variant='h5'>
          Generations: {generations}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          color='primary'
          onClick={(ev) => {
            ev.preventDefault()
            evolve()
          }}
          startIcon={<Icon name='stepForward' />}
          variant='contained'
        >
          Forward
        </Button>

        <Button
          color='primary'
          onClick={(ev) => {
            ev.preventDefault()
            restart()
          }}
          startIcon={<Icon name='reload' />}
          variant='outlined'
        >
          Restart
        </Button>

        <Button
          color='primary'
          onClick={(ev) => {
            ev.preventDefault()
            reseed()
          }}
          startIcon={<Icon name='sprout' />}
          variant='outlined'
        >
          Reseed
        </Button>
      </CardActions>
    </Card>
  )
}

export default NumberGeneratorCard
