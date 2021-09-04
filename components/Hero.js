import Link from 'next/link'

export default function Hero() {
  return (
    <section className="mx-auto w-full">
        <div className="bg-hero-bg bg-cover bg-top mb-12">
          <div className="bg-black bg-opacity-30">
            <div className="container mx-auto">  
                <div className="w-full h-screen flex flex-col justify-center items-center px-6 text-white text-center drop-shadow-2xl">
                    <h1 className="font-bold leading-snug text-4xl md:text-6xl lg:text-8xl mt-4 md:w-3/4">Stunning Kitchens & Bathrooms in Glossop</h1>
                    <p className="mb-8 md:w-1/2">Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas.</p>
                    <Link href="/about">
                      <button className="bg-orange hover:bg-gray-900 shadow-lg transition-all duration-500 text-white py-4 w-full md:w-96 px-12 md:px-24">Contact us Today</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        <div id="about" />
    </section>
  )
}

