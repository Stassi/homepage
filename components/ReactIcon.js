import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { react as d } from '../src/iconPaths'

const ReactIcon = props => (
  <SvgIcon {...props}>
    <path {...{ d }} />
  </SvgIcon>
)

export default ReactIcon
