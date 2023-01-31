import { useState } from "react"
import ContactForm from "../components/ContactForm"

const ContactPage = props => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-11 col-md-10 col-lg-8">
          <ContactForm 
            nameInput={nameInput}
            setNameInput={setNameInput}
            emailInput={emailInput}
            setEmailInput={setEmailInput}
            messageInput={messageInput}
            setMessageInput={setMessageInput}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage