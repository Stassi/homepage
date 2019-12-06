import React from 'react'
import Body from './Body'
import Head from './Head'

const App = props => (
  <>
    <Head />
    <Body {...props} />
  </>
)

export default App
