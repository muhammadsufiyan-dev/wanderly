function NotFound({ onNavigate }) {
  const requestedPath = window.location.pathname

  return (
    <main className="not-found-page d-flex align-items-center justify-content-center text-center">
      <div className="container py-5">
        <div className="not-found-icon mb-4">
          <i className="bi bi-compass"></i>
        </div>
        <p className="text-uppercase fw-bold text-brand mb-2">404 — Page not found</p>
        <h1 className="display-3 fw-bold mb-3">Looks like you took a wrong turn.</h1>
        <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '620px' }}>
          We couldn’t find <code>{requestedPath}</code>. The page may have moved, or the address may be incorrect.
        </p>
        <button className="btn btn-brand btn-lg px-4" onClick={() => onNavigate('/')}>
          <i className="bi bi-house-door me-2"></i>
          Back to Home
        </button>
      </div>
    </main>
  )
}

export default NotFound
