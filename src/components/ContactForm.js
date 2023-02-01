import { useState } from "react"

const ContactForm = ({ nameInput, setNameInput, emailInput, setEmailInput, messageInput, setMessageInput}) => {

  const [validateEmail, setValidateEmail] = useState(true)
  const [nameRequired, setNameRequired] = useState(true)
  const [emailRequired, setEmailRequired] = useState(true)
  const [messageRequired, setMessageRequired] = useState(true)
 
  return (
    <form onSubmit={event => {
      event.preventDefault()
    
      if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(emailInput)) {
        setValidateEmail(true)
      } else {
        setValidateEmail(false)
      }
    }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-3">Name:</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          value={nameInput}
          onChange={event => setNameInput(event.target.value)}
          onBlur={(event) => {
            if (event.target.value === '') {
              setNameRequired(false)
            } else {
              setNameRequired(true)
            }
          }}
          required
        />
        {nameRequired ? '' : <p>field is required</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fs-3">Email address:</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          placeholder="name@example.com" 
          value={emailInput}
          onChange={event => setEmailInput(event.target.value)}
          onBlur={(event) => {
            if (event.target.value === '') {
              setEmailRequired(false)
            } else {
              setEmailRequired(true)
            }
          }}
          required
        />
        {emailRequired ? '' : <p>field is required</p>}
        {validateEmail ? '' : <p className="text-danger pt-1 fs-5">Your email is invalid</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label fs-3">Message:</label>
        <textarea 
          className="form-control" 
          id="message" 
          rows="10"
          value={messageInput}
          onChange={event => setMessageInput(event.target.value)}
          onBlur={(event) => {
            if (event.target.value === '') {
              setMessageRequired(false)
            } else {
              setMessageRequired(true)
            }
          }}
          required
        ></textarea>
        {messageRequired ? '' : <p>field is required</p>}
      </div>
      <button className="btn fs-5" disabled={!nameInput || !emailInput || !messageInput}>Submit</button>
    </form>
  )
}

export default ContactForm