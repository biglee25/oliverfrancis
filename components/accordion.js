import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import Container from './container'



export default function Accordion({page}) {
  return (
      <Container>
        <div className="md:w-3/4 m-auto px-4 pt-16">
            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-2 py-2 font-medium text-left text-black border-gray-800 border-b-2 focus:outline-none">
                        <span>{page.questionTitle1}</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-orange`}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi id risus vestibulum volutpat sodales et justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tempus congue urna, vitae sagittis purus posuere in. Morbi nec lobortis leo.
                    </Disclosure.Panel>
                    </Transition>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2 ">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-2 py-2 font-medium text-left text-black border-gray-800 border-b-2 focus:outline-none">
                        <span>Question 2</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-orange`}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi id risus vestibulum volutpat sodales et justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tempus congue urna, vitae sagittis purus posuere in. Morbi nec lobortis leo.
                    </Disclosure.Panel>
                    </Transition>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
      </Container>
  )
}
