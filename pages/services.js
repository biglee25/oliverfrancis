import { GraphQLClient } from 'graphql-request';

import { CMS_NAME } from '../lib/constants';
import Head from 'next/head';

import Layout from '../components/layout';
import Container from '../components/container';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API);

  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "services"}) {
        
        id
        
        image1 {
          url
          width
          height
        }
        title2
        content2{
          html
        }
        image2 {
          url
          width
          height
        }
        title3
        content3{
          html
        }
        image3 {
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
    }
  };
}

export default function ({ page }) {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Services</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="description"
          content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
        
      </Head>
      <Layout>
        <Container>
          <div className="pt-8 md:pt-8 lg:pt-16">
            <div className="text-center">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none text-gray-800">
                Our Services
              </h2>
            </div>
            <div id="bathrooms" />
          </div>
        </Container>
        <Container>
          <div className="mt-6 md:my-12 lg:my-12">
            <div className="background-right">
              <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
                <div className="order-2 md:order-1">
                  <Image
                    src={page.image2.url}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    className="shadow-lg rounded-lg"
                  />
                </div>
                <Link href="/projects">
                  <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 mt-12 w-full md:w-56 rounded-lg order-3 md:order-2 block md:hidden">
                    View our Projects
                  </button>
                </Link>
                <div className="flex flex-col justify-center pb-12 md:px-12 order-1 md:order-2">
                  <div className="mt-12 md:my-4">
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">
                      {page.title2}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: page.content2.html }}
                      className="m-auto py-4"
                    />
                  </div>

                  <Link href="/projects">
                    <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56 rounded-lg hidden md:block">
                      View our Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div id="kitchens" />
          </div>
        </Container>
        <Container>
          <div className="mt-24 md:my-24 lg:my-80">
            <div className="background-left">
              <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
                <div className="order-2 md:order-1">
                  <Image
                    src={page.image3.url}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    className="shadow-lg rounded-lg"
                  />
                </div>
                <Link href="/projects">
                  <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 mt-12 w-full md:w-56 rounded-lg order-3 md:order-2 block md:hidden">
                    View our Projects
                  </button>
                </Link>
                <div className="flex flex-col justify-center pb-12 md:px-12">
                  <div className="mt-12 md:my-4">
                    <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">
                      {page.title3}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: page.content3.html }}
                      className="m-auto py-4"
                    />
                  </div>
                  <Link href="/projects">
                    <button className="bg-orange hover:bg-gray-800 text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56 rounded-lg hidden md:block">
                      View our Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
