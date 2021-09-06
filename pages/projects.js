import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import Container from '../components/container'
import Projects from '../components/projects'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'



export default function Index({ posts }) {
  const morePosts = posts.slice(0)
  return (
    <>
        <Head>
          <title>{CMS_NAME} - Projects</title>
          <meta charset="UTF-8"></meta>
          <meta name="description" content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
          <meta name="keywords" content="Kitchens, Bathrooms, Fitters, Suppliers, Bespoke, Projects"></meta>
        </Head>
        <Layout>
          <Container>
            <div className="pt-8 md:pt-8 lg:pt-16">
            {morePosts.length > 0 && <Projects posts={morePosts} />}
            </div>
          </Container>
        </Layout>
      </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}



