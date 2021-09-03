import '../styles/index.css'
import Footer from '../components/footer'



function MyApp({ Component, pageProps }) {

  
  return (
    <>
    <div id="home" />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}

export default MyApp
