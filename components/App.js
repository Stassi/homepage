import React from 'react'
import NextHead from 'next/head'
import useApp from '../src/useApp'

const App = ({ Component, ...props }) => {
  const {
    titleText,
    theme: {
      Provider: ThemeProvider,
      ...themeProps
    },
    ...appProps
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
            titleText,
            ...themeProps,
            ...appProps,
            ...props
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default App
