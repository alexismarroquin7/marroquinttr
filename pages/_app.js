import '@/styles/globals.css'
import { Navbar } from '@/widgets'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
