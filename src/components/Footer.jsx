function Footer({ brandName, socials, onNavigate }) {
  const handleLink = (event, href) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">{brandName}</h5>
            <p className="text-secondary">
              Making travel simple, affordable, and unforgettable.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" onClick={(event) => handleLink(event, '/')}>Home</a></li>
              <li><a href="/features" onClick={(event) => handleLink(event, '/features')}>Features</a></li>
              <li><a href="/testimonials" onClick={(event) => handleLink(event, '/testimonials')}>Testimonials</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3 fs-5">
              {socials.map(({ id, icon, url }) => (
                <a href={url} key={id} target="_blank" rel="noreferrer">
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-secondary mb-0">
          &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
