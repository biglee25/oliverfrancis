import { MdKitchen } from "react-icons/md";
import { FaBath } from 'react-icons/fa';

export default function Card() {
  return (
    <>
    <div className="text-center md:mt-36">
      <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Our Services</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 text-center lg:w-3/4 mx-auto">
      <div className="shadow-lg">
            <div className="flex flex-col justify-center p-4 md:p-12 bg-gray-900 text-white">
            <MdKitchen size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">Kitchens</h2>
                <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="flex flex-col justify-center p-4 md:p-12 bg-gray-900 text-white">
            <FaBath size="3rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                <h2 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4">Bathrooms</h2>
                <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
    </>
  )
}
