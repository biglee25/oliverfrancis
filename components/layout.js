import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen md:mt-28">
        <main>{children}</main>
      </div>
    </>
  )
}
