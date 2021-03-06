import Container from './container'
import { CMS_NAME } from '../lib/constants'

import Image from 'next/image'
import { FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <div className="pb-6">
            <Image
              src="/images/Oliver-Francis-Logo.svg"
              alt="Oliver Francis Interiors"
              width={200}
              height={100}
            />
          </div>
          <h3 className="text-2xl font-light text-center mb-5 text-white">
          © {new Date().getFullYear()} { CMS_NAME}
          </h3>
          <div className="py-4">
          <a href="tel:01457 511987" className="text-white">
            <FaPhoneSquare size="2rem" className="mx-auto mb-4 text-orange" />
            01457 511987</a> 
          </div>
          <div className="py-4">
          <a href="mailto:sales@oliverfrancisinteriors.co.uk" className="text-white">
            <MdEmail size="2rem" className="mx-auto mb-4 text-orange" />
            sales@oliverfrancisinteriors.co.uk</a>
          </div>
          <div className="py-4">
          <a href="https://www.facebook.com/oliverfrancisinteriors" target="_blank" className="text-white">
            <FaFacebookSquare size="2rem" className="mx-auto mb-4 text-orange" />
            oliverfrancisinteriors</a>
          </div>
          {/* <div className="text-gray-400 hover:text-gray-300 flex flex-col justify-center items-center lg:pl-4  mt-12">
            <a href="https://invadedbypixels.com">Website by Invaded by Pixels</a>
          </div> */}
        </div>
      </Container>
    </footer>
  )
}
