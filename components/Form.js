import React from "react"
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
            <div>
                <form onSubmit={this.submitForm} action="https://formspree.io/xgennqrz" method="POST">
                        <input type="name" name="name" placeholder="Name" className="w-full border-b-2 border-gray-300 p-4 mb-12" />
                        <input type="phone" name="phone" placeholder="Phone" className="w-full border-b-2 border-gray-300 p-4 mb-12" />
                        <input type="email" name="email" placeholder="Email" className="w-full border-b-2 border-gray-300 p-4 mb-12" />
                        <input type="text" name="message" placeholder="Message" className="w-full border-b-2 border-gray-300 p-4 mb-12" />

                    {status === "SUCCESS" ? (

                    <div className="bg-green-500 p-4">
                        Thanks for your message. We will reply as soon as possible.
                    </div>

                    ) : (

                    <button className="bg-black text-white hover:bg-orange hover:text-white transition-all duration-500 py-4 w-full mx-auto">Submit</button>

                        )}

                    {status === "ERROR" && <div className="bg-red-500 p-4">There was an error.</div>}
                    
                </form>
            </div>
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
