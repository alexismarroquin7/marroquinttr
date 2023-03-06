import '@/styles/globals.css'
import { Navbar, Footer } from '@/widgets'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
