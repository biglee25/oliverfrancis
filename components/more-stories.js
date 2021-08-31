import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold tracking-tighter leading-tight bg-gray-900 text-white px-4 py-12 text-center">
        More Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
