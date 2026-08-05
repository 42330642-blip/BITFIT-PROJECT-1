import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState('')

  const sendForm = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setAlert('Please fill all fields before sending the message.')
      return
    }
    setAlert('Thank you. Your message was prepared successfully.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="container py-5 page-space">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <p className="section-label">Contact</p>
          <h1 className="fw-bold">Send us a message</h1>
          <p className="text-muted">We are always here to help! Reach out to us with any questions or feedback.</p>
          <div className="contact-info p-4 mt-4">
            <p><strong>Email:</strong> support@BitFitStudio.com</p>
            <p><strong>Phone:</strong> +961 76 600 489</p>
            <p className="mb-0"><strong>Location:</strong> Beirut, Lebanon</p>
          </div>
        </div>
        <div className="col-lg-7">
          <form className="form-box p-4 p-md-5" onSubmit={sendForm}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button className="btn btn-main" type="submit">Send Message</button>
            {alert && <div className="alert alert-info mt-4 mb-0">{alert}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
