// FeatureCard.jsx
import { useState } from 'react'

// destructuring props directly in the parameter list
function FeatureCard({ icon, title, description }) {
  // local state: tracks whether this card is expanded to show more detail
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((prev) => !prev)

  return (
    <div
      className="card feature-card h-100 p-4 text-center shadow-sm"
      onClick={toggleExpanded}
    >
      <div className="feature-icon mb-3">
        <i className={`bi ${icon}`}></i>
      </div>
      <h5 className="fw-bold">{title}</h5>
      <p className="text-muted mb-0">
        {expanded ? description : `${description.slice(0, 40)}...`}
      </p>
      <small className="text-primary mt-2">
        {expanded ? 'Show less' : 'Click to read more'}
      </small>
    </div>
  )
}

export default FeatureCard
