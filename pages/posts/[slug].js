import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Projects from 'components/projects'
import PostHeader from 'components/post-header'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="mt-32 md:mt-40">
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta name="description" content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
                  <meta name="keywords" content={post.seo}></meta>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
                <img
                src={post.image1?.url}
                width={post.image1?.width}
                height={post.image1?.height}
              />
              <img
                src={post.image2?.url}
                width={post.image2?.width}
                height={post.image2?.height}
              />
              <img
                src={post.image3?.url}
                width={post.image3?.width}
                height={post.image3?.height}
              />
              <img
                src={post.image4?.url}
                width={post.image4?.width}
                height={post.image4?.height}
              />
            </div>

            </article>
            {morePosts.length > 0 && <Projects posts={morePosts} />}
          </>
        )}
      </Container>
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
