import { MdKitchen } from "react-icons/md";
import { FaBath } from 'react-icons/fa';

import Link from 'next/link'

import { GraphQLClient } from 'graphql-request';


export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "card"}) {
        id
        title1
        content1 {
          html
        }
        title2
        content2 {
          html
        }
      }
    }
    
    `
  );

  return {
    props: {
      page
    },
  };
}


export default function Card({ page, children }) {
  return (
    <>
      <div className="text-center md:mt-36">
        <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-center lg:w-3/4 mx-auto">
            <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-900 text-white">
              <MdKitchen size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">{page.title1}</h2>
                <p className="pb-5">Whether you are looking for a traditional kitchen with a rustic ambience or something contemporary and colourful, Oliver Francis Interiors has a stylish range of kitchen interiors for you to choose from.</p>
                <p className="pb-5">All the units will be designed and manufactured by us to meet shape and size requirements of your kitchen space.</p>
                <Link href="/services#kitchens">
                  <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto">Find out More</button>
                </Link>
            </div>
            <div className="flex flex-col justify-between p-4 md:p-12 bg-gray-900 text-white shadow-lg">
              <FaBath size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">Bathrooms</h2>
                <p className="pb-5">Create a luxurious and beautiful place to unwind with our range of bathroom designs.</p>
                <p className="pb-5">Whether you are looking for a sophisticated wet room or want a minimalist-themed bathroom, we provide customised services that meet your requirements and budget.</p> 
                <Link href="/services#bathrooms">
                  <button className="bg-orange hover:bg-white hover:text-black transition-all duration-500 py-4 w-full md:w-56 mx-auto">Find out More</button>
                </Link>
            </div>
      </div>
    </>
  )
}
