import React from 'react'
import NextAppClass from 'next/app'
import App from '../components/App'

class NextApp extends NextAppClass {
  render = () => <App {...this.props} />
}

export default NextApp
