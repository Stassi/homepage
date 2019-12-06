import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

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
      <MenuIcon />
    </IconButton>
  )
}

export default MenuButton
