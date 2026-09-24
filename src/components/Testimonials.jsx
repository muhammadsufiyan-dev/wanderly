// Testimonials.jsx
function Testimonials({ testimonials }) {
  return (
    <section className="bg-light py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What Our Travelers Say</h2>
        <div className="row g-4">
          {testimonials.map(({ id, name, quote, avatarInitial }) => (
            <div className="col-md-4" key={id}>
              <div className="card testimonial-card p-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-brand d-flex align-items-center justify-content-center text-white fw-bold me-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#ff6b35',
                    }}
                  >
                    {avatarInitial}
                  </div>
                  <h6 className="fw-bold mb-0">{name}</h6>
                </div>
                <p className="text-muted fst-italic mb-0">"{quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
