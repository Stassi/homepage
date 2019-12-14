import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    maxWidth: 365,
    width: '100%'
  }
})

const TicketAvatar = props => {
  const { root: rootClass } = useStyles()

  return (
    <Avatar
      alt='Andreas Stassivik'
      className={rootClass}
      src='/stassi-ticket.jpg'
      {...props}
    />
  )
}

export default TicketAvatar
