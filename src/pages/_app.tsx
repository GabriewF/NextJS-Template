import 'core-js'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
