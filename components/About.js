import Image from 'next/image'

export default function About() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24" id="about">
          <div className="flex flex-col justify-center md:px-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4">About</h2>
              <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
              <Image 
                  src="/images/kitchen.jpg"
                  width="100%"
                  height="100%"
                  layout="responsive"
              />
          </div>
      </div>
    </>
  )
}
