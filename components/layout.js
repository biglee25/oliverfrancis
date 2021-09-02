import Meta from '../components/meta'
import Nav from '../components/Nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen md:mt-28">
        <main>{children}</main>
      </div>
    </>
  )
}
