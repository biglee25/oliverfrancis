import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { CMS_NAME } from '../lib/constants'
import { MdKitchen } from "react-icons/md";
import { FaBath } from 'react-icons/fa';

import Link from 'next/link'

import Form from '../components/Form'


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
          <title>{CMS_NAME}</title>
        </Head>
        <section className="mx-auto w-full">
        <div className="bg-hero-bg bg-cover bg-top mb-12">
          <div className="bg-black bg-opacity-30">
            <div className="container mx-auto">  
                <div className="w-full h-screen flex flex-col justify-center items-center px-6 text-white text-center drop-shadow-2xl">
                    <h1 className="font-bold leading-snug text-4xl md:text-6xl lg:text-8xl my-4 md:w-3/4 tracking-tight">{page.heroTitle}</h1>
                    <p className="mb-8 md:w-1/2">{page.heroSubtitle}</p>
                    <Link href="/contact">
                      <button className="bg-orange hover:bg-gray-900 shadow-lg transition-all duration-500 text-white py-4 w-full md:w-96 px-12 md:px-24">Contact us Today</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    </section>
        <Layout>
          <Container>
            <div className="background-left my-4">
              <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
                <div className="flex flex-col justify-center pb-12 md:px-12">
                  <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="py-4" />
                    <Link href="/services">
                      <button className="bg-orange text-white hover:bg-black hover:text-white transition-all duration-500 py-4 w-full md:w-56 mt-12 md:mt-8">Our Services</button>
                    </Link>
                  </div>            
                  <div className="shadow-lg">
                    <Image
                      src={page.image1.url}
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </div>
                </div>
            </div>
            <div className="text-center md:mt-36">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-center lg:w-3/4 mx-auto">
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-900 text-white">
                  <MdKitchen size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none">{page.cardTitle1}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardContent1.html }} className="py-4" />
                    <Link href="/services#kitchens">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4">Find out More</button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-900 text-white shadow-lg">
                  <FaBath size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none">{page.cardTitle2}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardContent2.html }} className="py-4" />
                    <Link href="/services#bathrooms">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4">Find out More</button>
                    </Link>
                </div>
            </div>
          </Container>
          <Container>
          <div className="text-center md:mt-36">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none pb-12">Contact us</h2>
              <p className="w-full md:w-1/2 mx-auto pb-12">If you would like any advice or just a friendly chat, please fill in the form below and we will get back to you as soon as we can.</p>
          </div>
          <div className="w-full md:w-1/2 mx-auto">
            <Form />
          </div>
          </Container>
        </Layout>
    </>
  )
}

