import Container from '../components/container'
import Form from '../components/form'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import { FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';




export default function Contact() {
  return (
    <>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Layout>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 md:mt-64 items-center">
                    <div className="order-2 md:order-1 shadow-lg px-4 py-12 rounded-md bg-gray-50">
                        <Form />
                    </div>
                    <div className="text-center order-1 md:order-2">
                        <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Contact us</h2>
                        <p className="pb-4">If you have any questions, please get in touch.</p>
                        <div className="shadow-lg py-12 my-4 rounded-md bg-gray-50">
                            <FaPhoneSquare size="4rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                            <a href="tel:01457 511987">01457 511987</a> 
                        </div>
                        <div className="shadow-lg py-12 my-4 rounded-md bg-gray-50">
                            <MdEmail size="4rem" className="mx-auto mb-4 md:mb-8 text-orange" />
                            <a href="mailto:sales@oliverfrancisinteriors.co.uk">sales@oliverfrancisinteriors.co.uk</a>
                        </div>
                    </div>
                </div>
            </Container>
      </Layout>
      </>
  )
}




