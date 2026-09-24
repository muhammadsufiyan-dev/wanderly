// Newsletter.jsx
import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === '') return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="container my-5 py-4 text-center">
      <h2 className="fw-bold mb-3">Get Travel Deals in Your Inbox</h2>
      <p className="text-muted mb-4">
        Subscribe and be the first to know about our best offers.
      </p>

      <form
        className="d-flex justify-content-center gap-2 flex-wrap"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="form-control"
          style={{ maxWidth: '320px' }}
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-brand">
          Subscribe
        </button>
      </form>

      {submitted && (
        <div className="alert alert-success mt-3 mx-auto" style={{ maxWidth: '400px' }}>
          Thanks for subscribing!
        </div>
      )}
    </section>
  )
}

export default Newsletter
