import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'

const MoreButton = props => (
  <IconButton
    aria-label='display more actions'
    edge='end'
    {...props}
  >
    <MoreIcon />
  </IconButton>
)

export default MoreButton
