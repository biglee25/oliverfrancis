import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Layout from '../components/layout';

import Form from '../components/form'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "services"}) {
        id
        title
        subtitle
        content{
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


export default ({ page }) => (
  <Layout>
    <Container>
        <div className="bg-gray-800 text-white flex flex-col items-center justify-center">
          <h1>{page.title}</h1>
          <h2>{page.subtitle}</h2>
        </div>
        <div className="bg-primaryyellow my-12 rounded-lg p-5">
            <div dangerouslySetInnerHTML={{ __html: page.content.html }} className="m-auto py-12" />
        </div>
    </Container>
    <Form />
  </Layout>
);
