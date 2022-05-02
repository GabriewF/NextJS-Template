// Import's
import { Head, Html, Main, NextScript } from 'next/document'

// Document
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

// Export
export default Document
