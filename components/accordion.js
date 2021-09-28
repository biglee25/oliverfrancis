import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import Container from './container'

export default function Accordion() {
  return (
      <Container>
        <div className="md:w-3/4 m-auto px-4 pt-16">
            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-orange focus:outline-none focus-visible:ring focus-visible:ring-gray-800 focus-visible:ring-opacity-75">
                        <span>Question 1</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Answer 1
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-orange focus:outline-none focus-visible:ring focus-visible:ring-gray-800 focus-visible:ring-opacity-75">
                        <span>Question 2</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Answer 2
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
      </Container>
  )
}
