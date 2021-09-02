import React from 'react'
import Link from 'next/link'


export default function NavHome() {

  return (
    <section className="w-full fixed top-0 z-50 bg-gray-900 shadow-lg text-white flex-col flex items-center md:justify-between py-2">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 m-auto">
        <Link href="/" id="#home">
          Oliver Francis
        </Link>
      </h1>
      <div className="flex justify-around w-full md:w-1/2 mt-6">
        <Link href="/#about">About</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">Contact</Link>
      </div>
    </section>
  )
}