function DestinationCard({ icon, country, city, description, tag, onExplore }) {
  return (
    <article className="card destination-card h-100 border-0 shadow-sm overflow-hidden">
      <div className="destination-card-top">
        <div className="destination-icon" aria-hidden="true">
          <i className={`bi ${icon}`}></i>
        </div>
        <span className="destination-tag">{tag}</span>
      </div>
      <div className="card-body p-4">
        <p className="text-uppercase small fw-bold text-brand mb-1">{country}</p>
        <h3 className="h5 fw-bold mb-2">{city}</h3>
        <p className="text-muted mb-4">{description}</p>
        <button type="button" className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={onExplore}>
          Explore <i className="bi bi-arrow-right ms-1"></i>
        </button>
      </div>
    </article>
  )
}

export default DestinationCard
