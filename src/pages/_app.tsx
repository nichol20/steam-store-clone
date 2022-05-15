import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/StoreSidebar.css'
import '../styles/StoreMain.css'
import '../styles/StoreNav.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
