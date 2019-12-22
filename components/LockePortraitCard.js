import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 788
  },
  media: {
    height: 0,
    paddingTop: `${884 / 788 * 100}%`
  }
})

const LockePortraitCard = ({ router }) => {
  const {
    card: cardClass,
    media: mediaClass
  } = useStyles()

  return (
    <Card className={cardClass}>
      <CardActionArea
        onClick={(ev) => {
          ev.preventDefault()
          router.push('/generate/john-locke/epistles')
        }}
      >
        <CardMedia
          alt='John Locke portrait'
          className={mediaClass}
          image='/john-locke-portrait.png'
        />

        <CardContent>
          <Typography variant='h5'>
            John Locke
          </Typography>

          <Typography color='textSecondary' variant='subtitle1'>
            Epistle generator
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LockePortraitCard
