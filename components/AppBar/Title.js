import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  }
})

const Title = ({ text, grow = true }) => {
  const { grow: growClass } = useStyles()

  return (
    <Typography
      className={grow ? growClass : null}
      variant='h6'
    >
      {text}
    </Typography>
  )
}

export default Title
