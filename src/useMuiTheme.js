import React, {
  useEffect,
  useMemo,
  useState
} from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MdiIcon from '../components/MdiIcon'

const useMuiTheme = initialState => {
  const [intent, setIntent] = useState(initialState)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
  }, [])

  const theme = useMemo(() => createMuiTheme(intent), [intent])

  const Provider = useMemo(() => function Theme ({ children, ...props }) {
    return (
      <ThemeProvider {...{ theme, ...props }}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    )
  }, [theme])

  const isLightTheme = useMemo(() => intent.palette.type === 'light', [intent])

  const ToggleDarkLightButton = useMemo(
    () => function ToggleDarkLightButton (props) {
      return (
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
          {isLightTheme ? <MdiIcon name='darken' /> : <MdiIcon name='lighten' />}
        </IconButton>
      )
    },
    [isLightTheme]
  )

  return {
    Provider,
    theme,
    ToggleDarkLightButton
  }
}

export default useMuiTheme
