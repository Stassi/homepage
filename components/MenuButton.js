import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Icon from './Icon'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginRight: spacing(2)
  }
}))

const MenuButton = props => {
  const { root: rootClass } = useStyles()

  return (
    <IconButton
      aria-label='menu'
      className={rootClass}
      color='inherit'
      edge='start'
      {...props}
    >
      <Icon name='menu' />
    </IconButton>
  )
}

export default MenuButton
