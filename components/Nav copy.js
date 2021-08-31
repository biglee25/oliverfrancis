import Link from 'next/link'

import { CMS_NAME } from '../lib/constants'


export default function Nav() {

  return (
    <section className="w-full fixed top-0 z-50 bg-gray-900 shadow-lg text-white flex-col flex items-center md:justify-between py-2">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 m-auto">
        <Link href="/">
          Oliver Francis
        </Link>
      </h1>
      <div className="flex justify-around w-full md:w-1/2 mt-6">
        <Link href="/#about"><a className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">About</a></Link>
        <Link href="/#projects"><a className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Projects</a></Link>
        <Link href="/#contact"><a className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Contact</a></Link>
      </div>
    </section>

  )
}
