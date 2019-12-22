import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 722
  },
  media: {
    height: 0,
    paddingTop: `${856 / 722 * 100}%`
  }
})

const BlackwellPortraitCard = ({ router }) => {
  const {
    card: cardClass,
    media: mediaClass
  } = useStyles()

  return (
    <Card className={cardClass}>
      <CardActionArea
        onClick={(ev) => {
          ev.preventDefault()
          router.push('/generate/elizabeth-blackwell/bioethics')
        }}
      >
        <CardMedia
          alt='Elizabeth Blackwell portrait'
          className={mediaClass}
          image='/elizabeth-blackwell-portrait.jpg'
        />

        <CardContent>
          <Typography variant='h5'>
            Elizabeth Blackwell
          </Typography>

          <Typography color='textSecondary' variant='subtitle1'>
            Bioethics generator
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlackwellPortraitCard
