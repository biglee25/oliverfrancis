import Container from '../components/container'
import Head from 'next/head'
import Image from 'next/image'
import { CMS_NAME } from '../lib/constants'
import { MdViewQuilt } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
import { FaBath } from 'react-icons/fa';

import Link from 'next/link'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



import { GraphQLClient } from 'graphql-request';


export async function getStaticProps() {
const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "home"}) {
        id
        heroTitle
        heroSubtitle
        title1
        content1{
          html
        }
        image1 {
          url
          width
          height
        }
        cardTitle1
        cardContent1 {
          html
        }
        cardTitle2
        cardContent2 {
          html
        }
        cardTitle3
        cardContent3 {
          html
        }
        questionTitle1 
        questionContent1 {
          html
        }
        questionTitle2 
        questionContent2 {
          html
        }
        questionTitle3 
        questionContent3 {
          html
        }
        questionTitle4 
        questionContent4 {
          html
        }
        questionTitle5 
        questionContent5 {
          html
        }
      }
    }

    `
  );

  return {
    props: {
      page
    },
  };
}


export default function Index({ page }) {
  return (
    <>
        <Head>
          <title>{CMS_NAME} - Home</title>
          <meta name="description" content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
          <meta name="keywords" content="Kitchens, Bathrooms, Fitters, Suppliers, Bespoke"></meta>
        </Head>
        <section className="mx-auto w-full">
        <div className="bg-hero-bg bg-cover bg-top mb-12">
          <div className="bg-black bg-opacity-30">
            <div className="container mx-auto">  
                <div className="w-full h-screen flex flex-col justify-center items-center px-6 text-white text-center drop-shadow-2xl">
                    <h1 className="font-bold leading-snug text-4xl md:text-5xl lg:text-7xl my-4 md:w-3/4 tracking-tight">{page.heroTitle}</h1>
                    <p className="mb-8 md:w-1/2">{page.heroSubtitle}</p>
                    <Link href="/contact">
                      <button className="bg-orange hover:bg-gray-800 shadow-lg transition-all duration-500 text-white py-4 w-full md:w-96 px-12 md:px-24 rounded-lg">Contact us Today</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        </section>
          <Container>
            <div className="background-left my-4">
              <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
                <div className="flex flex-col justify-center pb-12 md:px-12">
                  <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="py-4" />
                    <Link href="/services">
                      <button className="bg-orange text-white hover:bg-gray-800 hover:text-white transition-all duration-500 py-4 w-full md:w-56 mt-12 md:mt-8 rounded-lg">Our Services</button>
                    </Link>
                  </div>            
                  <div>
                    <Image
                      src={page.image1.url}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      className="shadow-lg"
                      className="rounded-lg"
                    />
                  </div>
                </div>
            </div>
            <div className="text-center md:mt-48">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4 text-black">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-12 text-center  mx-auto">
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-800 text-white shadow-lg rounded-lg">
                <MdViewQuilt size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none">{page.cardTitle1}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardContent1.html }} className="py-4" />
                    <Link href="/services">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4 rounded-lg">Find out More</button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-800 text-white shadow-lg rounded-lg">
                <FaBath size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none">{page.cardTitle2}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardContent2.html }} className="py-4" />
                    <Link href="/services#bathrooms">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4 rounded-lg">Find out More</button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-800 text-white shadow-lg rounded-lg">
                  <MdKitchen size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none">{page.cardTitle3}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardContent3.html }} className="py-4" />
                    <Link href="/services#kitchens">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4 rounded-lg">Find out More</button>
                    </Link>
                </div>
            </div>
          </Container>
          <div className="mb-24">
          <div className="text-center md:mt-24">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4 text-black">Frequently Asked Questions</h2>
            </div>
            <Container>
              <div className="md:w-3/4 m-auto px-4 pt-16">
                  <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                      <Disclosure>
                      {({ open }) => (
                          <>
                          <Disclosure.Button className="flex justify-between w-full px-2 py-6 font-medium text-left text-black hover:text-orange border-gray-800 border-b-2 focus:outline-none">
                              <span>{page.questionTitle1}</span>
                              <ChevronDownIcon
                              className={`${
                                  open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-gray-900`}
                              />
                          </Disclosure.Button>
                          <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                          >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div dangerouslySetInnerHTML={{ __html: page.questionContent1.html }} className="py-4" />
                          </Disclosure.Panel>
                          </Transition>
                          </>
                      )}
                      </Disclosure>
                      <Disclosure as="div" className="mt-2 ">
                      {({ open }) => (
                          <>
                          <Disclosure.Button className="flex justify-between w-full px-2 py-6 font-medium text-left text-black hover:text-orange border-gray-800 border-b-2 focus:outline-none">
                              <span>{page.questionTitle2}</span>
                              <ChevronDownIcon
                              className={`${
                                  open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-gray-900`}
                              />
                          </Disclosure.Button>
                          <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                          >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div dangerouslySetInnerHTML={{ __html: page.questionContent2.html }} className="py-4" />
                          </Disclosure.Panel>
                          </Transition>
                          </>
                      )}
                      </Disclosure>
                      <Disclosure as="div" className="mt-2 ">
                      {({ open }) => (
                          <>
                          <Disclosure.Button className="flex justify-between w-full px-2 py-6 font-medium text-left text-black hover:text-orange border-gray-800 border-b-2 focus:outline-none">
                              <span>{page.questionTitle3}</span>
                              <ChevronDownIcon
                              className={`${
                                  open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-gray-900`}
                              />
                          </Disclosure.Button>
                          <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                          >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div dangerouslySetInnerHTML={{ __html: page.questionContent3.html }} className="py-4" />
                          </Disclosure.Panel>
                          </Transition>
                          </>
                      )}
                      </Disclosure>
                      <Disclosure as="div" className="mt-2 ">
                      {({ open }) => (
                          <>
                          <Disclosure.Button className="flex justify-between w-full px-2 py-6 font-medium text-left text-black hover:text-orange border-gray-800 border-b-2 focus:outline-none">
                              <span>{page.questionTitle4}</span>
                              <ChevronDownIcon
                              className={`${
                                  open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-gray-900`}
                              />
                          </Disclosure.Button>
                          <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                          >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div dangerouslySetInnerHTML={{ __html: page.questionContent4.html }} className="py-4" />
                          </Disclosure.Panel>
                          </Transition>
                          </>
                      )}
                      </Disclosure>
                      <Disclosure as="div" className="mt-2 ">
                      {({ open }) => (
                          <>
                          <Disclosure.Button className="flex justify-between w-full px-2 py-6 font-medium text-left text-black hover:text-orange border-gray-800 border-b-2 focus:outline-none">
                              <span>{page.questionTitle5}</span>
                              <ChevronDownIcon
                              className={`${
                                  open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-gray-900`}
                              />
                          </Disclosure.Button>
                          <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                          >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div dangerouslySetInnerHTML={{ __html: page.questionContent5.html }} className="py-4" />
                          </Disclosure.Panel>
                          </Transition>
                          </>
                      )}
                      </Disclosure>
                  </div>
              </div>
            </Container>
          </div>
    </>
  )
}

