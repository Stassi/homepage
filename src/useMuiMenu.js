import React, {
  useMemo,
  useState
} from 'react'
import MuiIconButton from '@material-ui/core/IconButton'

const useMuiMenu = (id = 'menu') => {
  const [anchorEl, setAnchorEl] = useState(null)

  const close = useMemo(() => () => setAnchorEl(null), [])

  const isOpen = useMemo(() => Boolean(anchorEl), [anchorEl])

  const IconButton = useMemo(() => ({ children, ...props }) => (
    <MuiIconButton
      aria-controls={id}
      aria-haspopup='true'
      aria-label={id}
      onClick={ev => {
        ev.preventDefault()
        setAnchorEl(ev.currentTarget)
      }}
      {...props}
    >
      {children}
    </MuiIconButton>
  ), [])

  return {
    anchorEl,
    close,
    IconButton,
    isOpen
  }
}

export default useMuiMenu
