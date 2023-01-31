import { useState } from "react"

const ContactForm = ({ nameInput, setNameInput, emailInput, setEmailInput, messageInput, setMessageInput}) => {

  const [validateEmail, setValidateEmail] = useState(true)
 
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
          required
        />
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
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label fs-3">Message:</label>
        <textarea 
          className="form-control" 
          id="message" 
          rows="10"
          value={messageInput}
          onChange={event => setMessageInput(event.target.value)}
          required
        ></textarea>
      </div>
      {validateEmail ? '' : <p>Your email is invalid</p>}
      <button className="btn fs-5" disabled={!nameInput || !emailInput || !messageInput}>Submit</button>
    </form>
  )
}

export default ContactForm