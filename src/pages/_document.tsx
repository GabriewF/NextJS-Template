import { Head, Html, Main, NextScript } from 'next/document'

const Document: React.FC = (): JSX.Element => {
  return (
    <Html>
      <Head></Head>
      <body className="container">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
