import { useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Hamburger from 'hamburger-react'


export default function Navbar({ fixed }) {

    const [expanded, setExpanded] = useState(false)
    

    return (
      <>
        <nav expanded={expanded} className="fixed top-0 w-full h-auto flex flex-wrap items-center justify-between py-4 bg-black z-50 shadow-md">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/" as="/#home">
                <a>
                <Image
                  src="/images/oliver-Francis-Logo.svg"
                  alt="Oliver Francis Interiors"
                  width={200}
                  height={100}
                />
                </a>
              </Link>
              <button onClick={() => setExpanded(!expanded)} className="text-white cursor-pointer px-3 py-1 flex items-center lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" type="button">
                <Hamburger toggled={expanded} toggle={setExpanded} />
              </button>
              </div>
            <div
              className={"lg:flex flex-grow items-center justify-center m-auto h-auto transition duration-500" + (expanded ? " flex  " : " hidden")}>
              <ul className="flex flex-col align-center justify-center lg:flex-row list-none lg:ml-auto h-5/6 md:h-auto py-12">
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase leading-snug text-white hover:text-orange hover:transition hover:duration-500 hover:ease-in-out active:bg-black" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Home</Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase leading-snug text-white hover:text-orange hover:transition hover:duration-500 hover:ease-in-out active:bg-black" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/#about" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">About</Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase leading-snug text-white hover:text-orange hover:transition hover:duration-500 hover:ease-in-out active:bg-black" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/services" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Services</Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase leading-snug text-white hover:text-orange hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/projects" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Projects</Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase leading-snug text-white hover:text-orange hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/contact" className="text-white hover:bg-orange px-4 py-2 transition-all duration-500">Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }


  