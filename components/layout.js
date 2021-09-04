import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen my-28 md:my-28 lg:mt-32">
        <main>{children}</main>
      </div>
    </>
  )
}
