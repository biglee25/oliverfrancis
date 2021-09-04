import { GraphQLClient } from 'graphql-request';

import Layout from '../components/layout';
import Container from '../components/container';
import Image from 'next/image'


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
        <div className="background-left">
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
            <div className="flex flex-col justify-center pb-12 md:px-12">
              <div className="bg-primaryyellow my-12 rounded-lg p-5">
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="m-auto py-12" />
              </div>
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
      </Container>
      <Container>
        <div className="background-right">
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
            <div className="shadow-lg">
              <Image
                src={page.image2.url}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-center pb-12 md:px-12">
              <div className="bg-primaryyellow my-12 rounded-lg p-5">
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">{page.title1}</h2>
                  <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="m-auto py-12" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
