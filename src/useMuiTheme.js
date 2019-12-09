import React, {
  useEffect,
  useMemo,
  useState
} from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import DarkenIcon from '@material-ui/icons/Brightness4'
import LightenIcon from '@material-ui/icons/Brightness7'

const useMuiTheme = initialState => {
  const [intent, setIntent] = useState(initialState)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
  }, [])

  const theme = useMemo(() => createMuiTheme(intent), [intent])

  const Provider = useMemo(() => ({ children }) => (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  ), [theme])

  const isLightTheme = useMemo(() => intent.palette.type === 'light', [intent])

  const ToggleDarkLightButton = useMemo(() => props => (
    <IconButton
      onClick={(ev) => {
        ev.preventDefault()

        setIntent(({ palette }) => ({
          palette: {
            ...palette,
            type: palette.type === 'light' ? 'dark' : 'light'
          }
        }))
      }}
      {...props}
    >
      {isLightTheme ? <DarkenIcon /> : <LightenIcon />}
    </IconButton>
  ), [isLightTheme])

  return {
    Provider,
    theme,
    ToggleDarkLightButton
  }
}

export default useMuiTheme
