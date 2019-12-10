import React from 'react'
import NextHead from 'next/head'
import useApp from '../src/useApp'

const App = ({ Component, ...props }) => {
  const {
    titleText,
    localization,
    theme: {
      Provider: ThemeProvider,
      ...themeProps
    }
  } = useApp()

  return (
    <>
      <NextHead>
        <title>
          {titleText}
        </title>
      </NextHead>

      <ThemeProvider>
        <Component
          {...{
            localization,
            titleText,
            ...themeProps,
            ...props
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default App
