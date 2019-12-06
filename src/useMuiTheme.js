import React, {
  useEffect,
  useMemo,
  useState
} from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const useMuiTheme = initialState => {
  // TODO: Set theme intent
  const [intent] = useState(initialState)

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

  return { Provider, theme }
}

export default useMuiTheme
