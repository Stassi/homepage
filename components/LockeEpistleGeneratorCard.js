import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { ngramsDistribution } from 'markovian-nlp'
import Icon from './Icon'
import lockesEpistle from '../src/corpora/lockesEpistle'
import useMarkovianNlp from '../src/useMarkovianNlp'

const distribution = ngramsDistribution(lockesEpistle)

const useStyles = makeStyles({
  root: {}
})

const LockeEpistleGeneratorCard = () => {
  const {} = useStyles()

  const {
    evolve,
    reseed,
    restart,
    result
  } = useMarkovianNlp({ distribution })

  return (
    <Card>
      <CardContent>
        <CardActionArea
          onClick={(ev) => {
            ev.preventDefault()
            evolve()
          }}
        >
          <Typography
            color='textPrimary'
            variant='h4'
          >
            {`"…${result}…"`}
          </Typography>
        </CardActionArea>
      </CardContent>

      <CardActions>
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
          variant='text'
        >
          Reseed
        </Button>
      </CardActions>
    </Card>
  )
}

export default LockeEpistleGeneratorCard
