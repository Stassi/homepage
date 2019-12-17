import React from 'react'
import useMdi from '../src/useMdi'

const MdiIcon = ({ name, ...props }) => {
  const Component = useMdi({ name })
  return <Component {...props} />
}

export default MdiIcon
