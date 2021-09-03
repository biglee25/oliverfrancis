import Container from '../components/container'
import Projects from '../components/projects'
import Navbar from 'components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Card from 'components/Card'



export default function Index({ posts }) {
  const morePosts = posts.slice(0)
  return (
    <>
    <Navbar />
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="pt-36 md:pt-8 lg:pt-16">
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



