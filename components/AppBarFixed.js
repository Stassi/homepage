import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(({ mixins: { toolbar: offset } }) => ({ offset }))

const AppBarFixed = ({ children, ...props }) => {
  const { offset: offsetClass } = useStyles()

  return (
    <>
      <MuiAppBar position='fixed' {...props}>
        <Toolbar>
          {children}
        </Toolbar>
      </MuiAppBar>

      <div className={offsetClass} />
    </>
  )
}

export default AppBarFixed
