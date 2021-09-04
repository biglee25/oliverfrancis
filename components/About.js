import Image from 'next/image'
import kitchen from '../public/images/kitchen.jpg'

export default function About() {
  return (
  
    <>
    <div className="background-left" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:mt-56">
          <div className="flex flex-col justify-center pb-12 md:px-12">
              <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-black">Bespoke Design, Quality Installations.</h2>
              <p>Oliver Francis Interiors are a professional and established company that designs kitchens and bathrooms. While we have an exciting range of interiors to choose from, we also provide bespoke services. Based in Glossop, we work throughout Greater Manchester.</p>
          </div>
          <div className="shadow-lg">
            <Image
            src={kitchen}
            width="100%"
            height="100%"
            layout="responsive"
            placeholder="blur"
            />
          </div>
        </div>
    </div>
    </>
  )
}
