import React from 'react'
import NextHead from 'next/head'

const Head = ({ titleText = 'App' }) => (
  <NextHead>
    <title>
      {titleText}
    </title>
  </NextHead>
)

export default Head
