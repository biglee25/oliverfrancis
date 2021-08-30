import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="shadow-lg">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      <div className="bg-gray-200 p-4 text-center font-extrabold">
        <h3 className="mb-3 text-3xl leading-snug">{title}</h3>
        <div className="mb-4 text-lg font-bold">
          <Date dateString={date} />
        </div>
        <p className="mb-4 text-lg leading-relaxed font-normal">{excerpt}</p>
          <Link href={`/posts/${slug}`}>
            <button className="bg-black hover:bg-orange transition-all duration-500 py-4 w-full md:w-56 mx-auto text-white hover:text-white">Explore</button>
          </Link>
      </div>
    </div>
  )
}
