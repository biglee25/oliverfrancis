import Container from '../components/container'
import Projects from '../components/projects'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'



export default function Index({ posts }) {
  const morePosts = posts.slice(0)
  return (
    <>
        <Head>
          <title>{CMS_NAME}</title>
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



