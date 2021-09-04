import '../styles/index.css'

import Navbar from 'components/Navbar'
import Footer from '../components/footer'



export default function MyApp({ Component, pageProps }) {

  
  return (
    <>
    <Navbar />
      <Component {...pageProps} />
    <Footer />
    </>
  ) 
}