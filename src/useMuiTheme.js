import React, {
  useEffect,
  useMemo,
  useState
} from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import DarkenIcon from '@material-ui/icons/Brightness4'
import LightenIcon from '@material-ui/icons/Brightness7'

const useMuiTheme = initialState => {
  const [intent, setIntent] = useState(initialState)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
  }, [])

  const handleToggleDarkLight = useMemo(() => (ev) => {
    ev.preventDefault()

    setIntent(({ palette }) => ({
      palette: {
        ...palette,
        type: palette.type === 'light' ? 'dark' : 'light'
      }
    }))
  }, [])

  const theme = useMemo(() => createMuiTheme(intent), [intent])

  const Provider = useMemo(() => ({ children }) => (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  ), [theme])

  return {
    DarkenIcon,
    handleToggleDarkLight,
    LightenIcon,
    Provider,
    theme
  }
}

export default useMuiTheme
