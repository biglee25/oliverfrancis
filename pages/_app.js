import '../styles/index.css'
import Nav from '../components/Nav'
import Footer from '../components/footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}

export default MyApp
