import Link from 'next/link'

import { CMS_NAME } from '../lib/constants'

export default function Nav() {
  return (
    <section className="w-full fixed top-0 z-50 bg-gray-900 text-white flex-col md:flex-row flex items-center md:justify-between p-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 m-auto">
        <Link href="/">
          { CMS_NAME }
        </Link>
      </h1>
    </section>

  )
}
