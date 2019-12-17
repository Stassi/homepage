import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginRight: spacing(2)
  }
}))

const UpButton = props => {
  const { root: rootClass } = useStyles()

  return (
    <IconButton
      aria-label='up'
      className={rootClass}
      color='inherit'
      edge='start'
      {...props}
    >
      <ArrowUpwardIcon />
    </IconButton>
  )
}

export default UpButton
