// Hero.jsx
import SearchBar from './SearchBar.jsx'

function Hero({ title, subtitle, onSearch }) {
  return (
    <section className="hero-section text-center" id="home">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">{title}</h1>
        <p className="lead mb-4 fs-4">{subtitle}</p>
      </div>
      <div className="container">
        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  )
}

export default Hero
