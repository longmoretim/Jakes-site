import React from 'react';

import './ContactForm.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send Request')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  
  return (
    <div className="app__ContactForm" id="contactform">
      <h2 className="headtext__cormorant">Estimate Booking Form</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" id="name" placeholder="Name" required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="email" id="email" placeholder="Please enter a valid email adress" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="message" placeholder="Please enter a detailed description of work to be done"  required />
        </div>
        <button id="contact_btn" className="custom__button" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm;