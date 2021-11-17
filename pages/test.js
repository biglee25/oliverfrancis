import { GraphQLClient } from 'graphql-request';

import { CMS_NAME } from '../lib/constants'
import Head from 'next/head'

import Layout from '../components/layout';
import Container from '../components/container';
import Image from 'next/image'
import Link from 'next/link'


export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "services"}) {
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
        gallery1 {
          url
          width
          height
        }
        gallery2 {
          url
          width
          height
        }
        gallery3 {
          url
          width
          height
        }
        gallery4 {
          url
          width
          height
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

export default function ({ page }) {
  return (
    <>
    <Head>
    <title>{CMS_NAME} - Services</title>
      <meta charset="UTF-8"></meta>
      <meta name="description" content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
      <meta name="keywords" content="Kitchens, Bathrooms, Fitters, Suppliers, Bespoke"></meta>
    </Head>
    <Layout>
      <Container>
        <div className="pb-24 pt-8">
          <div className="background-left">
            <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-48">
              <div className="flex flex-col justify-center pb-12 md:px-12">
                <div className="mt-12 md:my-4 ">
                  <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-black text-bg">{page.title1}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="m-auto pt-4 md:py-4" />
                </div>
                <Link href="/projects">
                  <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56 rounded-lg order-3 md:order-2 hidden md:block">View our Projects</button>
                </Link>
              </div>
              <Image
                src={page.image1.url}
                width="100%"
                height="100%"
                layout="responsive"
                className="shadow-lg rounded-lg"
              />
            </div>
            <Link href="/projects">
              <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56 rounded-lg order-3 md:order-2 block md:hidden">View our Projects</button>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src={page.gallery1.url}
          width="100%"
          height="100%"
          layout="responsive"
          className="shadow-lg rounded-lg"
        />
        <Image
          src={page.gallery2.url}
          width="100%"
          height="100%"
          layout="responsive"
          className="shadow-lg rounded-lg"
        />
        <Image
          src={page.gallery3.url}
          width="100%"
          height="100%"
          layout="responsive"
          className="shadow-lg rounded-lg"
        />
        <Image
          src={page.gallery4.url}
          width="100%"
          height="100%"
          layout="responsive"
          className="shadow-lg rounded-lg"
        />
        </div>
      </Container>
    </Layout>
    </>
  )
}
