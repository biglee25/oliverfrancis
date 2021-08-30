import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="mx-auto md:w-3/4 bg-gray-100 p-6">
      <PostTitle>{title}</PostTitle>

        <div className="mb-6 text-lg text-center">
          Project Date:&nbsp;<span><Date dateString={date} /></span>   
        </div>
      </div>
    </>
  )
}
