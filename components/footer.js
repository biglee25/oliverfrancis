import Container from './container'
import { CMS_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-5 text-white">
          © {new Date().getFullYear()} { CMS_NAME}
          </h3>
          <div className="text-white hover:text-gray-300 flex flex-col justify-center items-center lg:pl-4  mt-12">
            <a href="https://invadedbypixels.com">Website by Invaded by Pixels</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
