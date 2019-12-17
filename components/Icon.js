import React from 'react'
import useMdiIcon from '../src/useMdiIcon'

const Icon = ({ name, ...props }) => {
  const Component = useMdiIcon({ name })
  return <Component {...props} />
}

export default Icon
