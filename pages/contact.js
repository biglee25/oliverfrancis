import Head from 'next/head';

import Container from '../components/container';
import Form from '../components/Form';
import Layout from '../components/layout';
import { CMS_NAME } from '../lib/constants';

import { FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Contact</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="description"
          content="Oliver Francis Interiors are your local kitchen company in Glossop, specialising in kitchen and bathroom design and installation. Call the team today to discuss your ideas."></meta>
        <meta
          name="keywords"
          content="Kitchens, Bathrooms, Fitters, Suppliers, Bespoke, Contact us"></meta>
      </Head>
      <Layout>
        <Container>
          <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4 text-center pt-8 md:pt-16 text-black">
            Contact us
          </h2>
          <p className="pb-4 text-center">
            If you have any questions, please get in touch
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 mt-4 items-center">
            <div className="order-2 md:order-1 shadow-lg px-4 py-20 rounded-lg bg-gray-200">
              <h2 className="text-2xl font-bold pb-8 text-center text-black">
                Fill in the form and we will get right back to you.
              </h2>
              <Form />
            </div>
            <div className="text-center order-1 md:order-2 flex flex-col justify-between">
              <div className="shadow-lg py-12 my-4 rounded-lg bg-gray-800 text-white">
                <h2 className="text-2xl font-bold pb-8">
                  Contact us by phone.
                </h2>
                <a href="tel:01457 511987" className="font-bold">
                  <FaPhoneSquare
                    size="4rem"
                    className="mx-auto mb-4 text-orange"
                  />
                  01457 511987
                </a>
              </div>
              <div className="shadow-lg py-12 my-4 rounded-lg bg-gray-800 text-white">
                <h2 className="text-2xl font-bold pb-8">Contact us by email</h2>
                <a
                  href="mailto:sales@oliverfrancisinteriors.co.uk"
                  className="font-bold">
                  <MdEmail size="4rem" className="mx-auto mb-4 text-orange" />
                  sales@oliverfrancisinteriors.co.uk
                </a>
              </div>
              <div className="shadow-lg py-12 my-4 rounded-lg bg-gray-800 text-white">
                <h2 className="text-2xl font-bold pb-8">Find us on Facebook</h2>
                <a
                  href="https://www.facebook.com/oliverfrancisinteriors"
                  target="_blank"
                  className="font-bold">
                  <FaFacebookSquare
                    size="4rem"
                    className="mx-auto mb-4 text-orange"
                  />
                  oliverfrancisinteriors
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
