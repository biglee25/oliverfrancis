import Link from 'next/link'

export default function Hero() {
  return (
    <section className="mx-auto md:mt-10 lg:mt-16 w-full">
        <div className="bg-hero-bg bg-cover bg-top mb-12">
          <div className="bg-black bg-opacity-40">
            <div className="container mx-auto">  
                <div className="w-full h-screen flex flex-col justify-center items-center pt-12 pb-24 px-6 text-white text-center">
                    <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl my-4 md:w-3/4">Bespoke Kitchems and Bathrooms at a price that suits you</h1>
                    <p className="leading-normal mb-12">We offer a wide range of bespoke services to transform your home.</p>
                    <Link href="/about">
                      <button className="bg-orange hover:bg-gray-900 hover:shadow-lg transition-all duration-500 text-white py-6 px-12 md:px-24">Find out more</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        <div id="about" />
    </section>
  )
}

