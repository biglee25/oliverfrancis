import React from 'react'

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
        <>
        <h1>
          CONTACT<mark> US</mark> TODAY
        </h1>
        <p>We promise we wont bite.</p>

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xgennqrz"
          method="POST"
        >
          <Formarea>
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <Message>
              <input type="text" name="message" placeholder="Message" />
            </Message>
            {status === "SUCCESS" ? (
              <Success>
                Thanks for your message. We will reply as soon as possible.
              </Success>
            ) : (
              <button>Submit</button>
            )}
            {status === "ERROR" && <Fail>There was an error.</Fail>}
          </Formarea>
        </form>
        </>
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
