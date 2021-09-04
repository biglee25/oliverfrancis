import Container from '../components/container'
import Hero from '../components/Hero'
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
        title1
        content1{
          html
        }
        image1 {
          url
          width
          height
        }
        cardtitle1
        cardcontent1 {
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
        <Hero />
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
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">{page.cardtitle1}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.cardcontent1.html }} className="py-4" />
                    <Link href="/services#kitchens">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4">Find out More</button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-900 text-white shadow-lg">
                  <FaBath size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">Bathrooms</h2>
                    <p className="pb-5">Create a luxurious and beautiful place to unwind with our range of bathroom designs.</p>
                    <p className="pb-5">Whether you are looking for a sophisticated wet room or want a minimalist-themed bathroom, we provide customised services that meet your requirements and budget.</p> 
                    <Link href="/services#bathrooms">
                      <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto mt-12 md:mt-4">Find out More</button>
                    </Link>
                </div>
            </div>
            <Form />
          </Container>
        </Layout>
    </>
  )
}

