import PostPreview from './post-preview'

export default function Projects({ posts }) {
  return (
    <section id="projects">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Our Projects</h2>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
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
