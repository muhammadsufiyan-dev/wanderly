// SearchBar.jsx
import { useState } from 'react'

// destructured props: onSearch is a callback passed from the parent (App)
function SearchBar({ onSearch }) {
  // local component state for each controlled input
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [guests, setGuests] = useState(1)

  // onChange handlers update state as the user types/selects
  const handleDestinationChange = (e) => setDestination(e.target.value)
  const handleCheckInChange = (e) => setCheckIn(e.target.value)
  const handleGuestsChange = (e) => setGuests(Number(e.target.value))

  // onSubmit handler - prevents page reload and calls parent callback with the form data
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({ destination, checkIn, guests })
  }

  return (
    <div className="card search-card p-4 mx-auto" style={{ maxWidth: '900px' }}>
      <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="destination" className="form-label fw-semibold">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="form-control"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="checkIn" className="form-label fw-semibold">
            Check-in
          </label>
          <input
            type="date"
            id="checkIn"
            className="form-control"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="guests" className="form-label fw-semibold">
            Guests
          </label>
          <select
            id="guests"
            className="form-select"
            value={guests}
            onChange={handleGuestsChange}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-brand fw-semibold">
            <i className="bi bi-search me-1"></i>Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
