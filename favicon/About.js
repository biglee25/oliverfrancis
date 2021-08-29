
import Container from '../components/container';
import Layout from '../components/layout';

import Image from 'next/image'

export default function About() {
  return (
    <Layout>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center px-12">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4">About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    </Layout>
  )
}
