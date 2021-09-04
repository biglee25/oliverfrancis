import { GraphQLClient } from 'graphql-request';

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
        title2
        content2{
          html
        }
        image2 {
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
    <Layout>
      <Container>
        <div className="background-left my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
            <div className="flex flex-col justify-center pb-12 md:px-12">
              <div className="my-12">
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="m-auto py-4" />
              </div>
              <Link href="/projects">
                <button className="bg-orange hover:bg-black text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56">View our Projects</button>
              </Link>
            </div>
              <Image
                src={page.image1.url}
                width="100%"
                height="100%"
                layout="responsive"
                className="shadow-lg"
              />
          </div>
        </div>
      </Container>
      <Container>
        <div className="background-right my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
            <div className="shadow-lg order-2 md:order-1">
              <Image
                src={page.image2.url}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-center pb-12 md:px-12 order-1 md:order-2">
              <div className="my-12">
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="m-auto py-4" />
              </div>
              <Link href="/projects">
                <button className="bg-orange hover:bg-black text-white hover:text-white transition-all duration-500 py-4 w-full md:w-56">View our Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
