import React, { Children } from 'react'
import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

class NextDocument extends Document {
  render = () => (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          name='viewport'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}

NextDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}

export default NextDocument
