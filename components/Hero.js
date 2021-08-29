import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mx-auto md:mt-10 lg:mt-16">
        <div className="bg-hero-bg bg-cover bg-top mb-12">
          <div className="bg-black bg-opacity-40">
            <div className="container text-center">  
                <div className="w-full h-screen flex flex-col justify-center items-center pt-12 pb-24 px-6 text-white">
                    <h1 className="font-bold text-5xl my-4 md:w-1/2">Bespoke Interior Design at a cost to suit you.</h1>
                    <p className="leading-normal mb-12 md:w-1/4">We offer a wide range of bespoke services to transform your home.</p>
                    <Link href="/about">
                      <button className="bg-red-600 hover:bg-gray-900 text-white py-6 px-12 md:px-24">Find out more</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

