import 'core-js'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        defer={true}
        async={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App