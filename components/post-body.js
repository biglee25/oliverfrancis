import postStyles from './post-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      className={`w-full md:w-5/6 lg:w-3/4 mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
