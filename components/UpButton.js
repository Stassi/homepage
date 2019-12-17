import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Icon from './Icon'

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
      <Icon name='arrowUp' />
    </IconButton>
  )
}

export default UpButton
