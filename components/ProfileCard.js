import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 365
  },
  media: {
    height: 0,
    paddingTop: `${381 / 365 * 100}%`
  }
})

const ProfileCard = ({ router, localization: { Phrase } }) => {
  const {
    card: cardClass,
    media: mediaClass
  } = useStyles()

  return (
    <Card className={cardClass}>
      <CardActionArea>
        <CardMedia className={mediaClass} image='/stassi-ticket.jpg' />

        <CardContent>
          <Typography variant='h5'>
            Andreas Stassivik
          </Typography>

          <Typography color='textSecondary' variant='subtitle1'>
            <Phrase text='Software Developer' />
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          color='secondary'
          onClick={(ev) => {
            ev.preventDefault()
            router.push('/andreas-stassivik/profile')
          }}
        >
          <Phrase text='View profile' />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProfileCard
