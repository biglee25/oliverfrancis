import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
})
{
  return (
    <div className="shadow-lg bg-gray-200 rounded-lg">
      <CoverImage slug={slug} title={title} url={coverImage.url} />
      <div className="p-4 text-center font-bold">
        <h3 className="mb-3 text-3xl leading-snug">{title}</h3>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
        <p className="mb-4 text-lg leading-relaxed font-normal">{excerpt}</p>
          <Link href={`/posts/${slug}`}>
            <button className="bg-orange hover:bg-black transition-all duration-500 py-4 w-full md:w-56 mx-auto text-white hover:text-white rounded-lg">Explore</button>
          </Link>
      </div>
    </div>
  )
}
