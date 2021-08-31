import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Nav() {

  return (
    <section className="w-full fixed top-0 z-50 bg-gray-900 shadow-lg text-white flex-col flex items-center md:justify-between py-2">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 m-auto">
        <AnchorLink offset={() => 150} href="#home" id="#home">
          Oliver Francis
        </AnchorLink>
      </h1>
      <div className="flex justify-around w-full md:w-1/2 mt-6">
        <AnchorLink offset={() => 150} href="#about" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">About</AnchorLink>
        <AnchorLink offset={() => 150} href="#projects" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Projects</AnchorLink>
        <AnchorLink offset={() => 150} href="#contact" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Contact</AnchorLink>
      </div>
    </section>
  )
}