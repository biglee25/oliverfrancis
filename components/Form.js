import React from "react"

import Layout from "./layout"
import Container from "./container"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
        <Layout>
      <Container>
      <div className="text-center mb-12">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none md:pb-4">Contact us</h2>
            </div>

        <div className="flex justify-center mx-auto bg-gray-100 py-12">
            <form onSubmit={this.submitForm} action="https://formspree.io/xgennqrz" method="POST">
                <div>
                    <p>Name</p>
                    <input type="name" name="name" placeholder="Name" className="w-96 border-b-2 border-gray-300 p-4 mb-8" />
                    <p>Phone</p>
                    <input type="phone" name="phone" placeholder="Phone" className="w-96 border-b-2 border-gray-300 p-4 mb-8" />
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" className="w-96 border-b-2 border-gray-300 p-4 mb-8" />
                    <p>Message</p>
                    <input type="text" name="message" placeholder="Message" className="w-96 border-b-2 border-gray-300 p-4 mb-8" />
                </div>

                {status === "SUCCESS" ? (
                <div>
                    Thanks for your message. We will reply as soon as possible.
                </div>
                ) : (
                <button className="bg-black text-white hover:bg-orange hover:text-white transition-all duration-500 py-4 w-full mx-auto">Submit</button>
                    )}
                {status === "ERROR" && <div>There was an error.</div>}
            </form>
        </div>
      </Container>

        </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
