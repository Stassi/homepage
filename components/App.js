import React from 'react'
import NextHead from 'next/head'
import useApp from '../src/useApp'

const App = ({ Component, ...props }) => {
  const {
    titleText,
    theme: {
      theme,
      Provider: ThemeProvider
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
            theme,
            titleText,
            ...props
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default App
