import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { lambda as d } from '../src/iconPaths'

const LambdaIcon = props => (
  <SvgIcon {...props}>
    <path {...{ d }} />
  </SvgIcon>
)

export default LambdaIcon
