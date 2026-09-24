import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './components/NotFound.jsx'
import DestinationCard from './components/DestinationCard.jsx'

const navLinks = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Features', href: '/features' },
  { id: 3, label: 'Testimonials', href: '/testimonials' },
]

const features = [
  {
    id: 1,
    icon: 'bi-airplane-fill',
    title: 'Best Flight Deals',
    description:
      'We partner with hundreds of airlines to bring you the lowest fares, updated daily.',
  },
  {
    id: 2,
    icon: 'bi-house-heart-fill',
    title: 'Verified Stays',
    description:
      'Every hotel and rental listed is verified by our team so you always know what to expect.',
  },
  {
    id: 3,
    icon: 'bi-headset',
    title: '24/7 Support',
    description:
      'Our travel experts are available around the clock to help with bookings and changes.',
  },
]

const destinations = [
  { id: 1, icon: 'bi-buildings', country: 'Türkiye', city: 'Istanbul', tag: 'Culture', description: 'Historic streets, Bosphorus views, vibrant bazaars, and unforgettable food.' },
  { id: 2, icon: 'bi-sun', country: 'United Arab Emirates', city: 'Dubai', tag: 'Luxury', description: 'Modern skylines, desert adventures, beaches, and world-class experiences.' },
  { id: 3, icon: 'bi-water', country: 'Maldives', city: 'Malé', tag: 'Relax', description: 'Crystal-clear water, peaceful islands, and a perfect tropical escape.' },
  { id: 4, icon: 'bi-bank', country: 'France', city: 'Paris', tag: 'Romance', description: 'Iconic landmarks, charming cafés, art, and timeless city walks.' },
  { id: 5, icon: 'bi-tree', country: 'Switzerland', city: 'Interlaken', tag: 'Adventure', description: 'Mountain scenery, lakes, hiking trails, and unforgettable alpine views.' },
  { id: 6, icon: 'bi-stars', country: 'Japan', city: 'Tokyo', tag: 'Explore', description: 'A fast-moving mix of tradition, technology, cuisine, and culture.' },
]

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    avatarInitial: 'A',
    quote: 'Wanderly made planning my trip to Istanbul effortless. Highly recommend!',
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    avatarInitial: 'B',
    quote: 'Found a flight deal I couldn\'t get anywhere else. Saved a lot of money.',
  },
  {
    id: 3,
    name: 'Sara Malik',
    avatarInitial: 'S',
    quote: 'Customer support helped me rebook within minutes. Great experience.',
  },
]

const socials = [
  { id: 1, icon: 'bi-facebook', url: 'https://facebook.com' },
  { id: 2, icon: 'bi-twitter-x', url: 'https://twitter.com' },
  { id: 3, icon: 'bi-instagram', url: 'https://instagram.com' },
]

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '')

function getRoutePath() {
  const pathname = window.location.pathname
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    return pathname.slice(BASE_PATH.length) || '/'
  }
  return pathname || '/'
}

function useRoute() {
  const [route, setRoute] = useState(getRoutePath)

  useEffect(() => {
    const handlePopState = () => setRoute(getRoutePath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (href) => {
    const nextPath = href === '/' ? '/' : href.replace(/\/$/, '')
    const fullPath = `${BASE_PATH}${nextPath}` || '/'
    window.history.pushState({}, '', fullPath)
    setRoute(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { route, navigate }
}

function HomePage({ onSearch, onNavigate }) {
  return (
    <>
      <Hero
        title="Travel the World, Simply."
        subtitle="Find flights, stays, and experiences all in one place."
        onSearch={onSearch}
      />

      <section className="container py-5" aria-labelledby="destinations-heading">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
          <div>
            <p className="text-uppercase small fw-bold text-brand mb-2">Inspiration for your next trip</p>
            <h2 id="destinations-heading" className="fw-bold mb-2">Popular destinations</h2>
            <p className="text-muted mb-0">Explore hand-picked places and start planning your next adventure.</p>
          </div>
          <button type="button" className="btn btn-dark rounded-pill px-4" onClick={() => onNavigate('/features')}>
            See travel features
          </button>
        </div>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div className="col-sm-6 col-lg-4" key={destination.id}>
              <DestinationCard
                {...destination}
                onExplore={() => onSearch({ destination: destination.city, guests: 1 })}
              />
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  )
}

function FeaturesPage() {
  return (
    <main className="page-content">
      <Features features={features} />
      <Newsletter />
    </main>
  )
}

function TestimonialsPage() {
  return (
    <main className="page-content">
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </main>
  )
}

function App() {
  const { route, navigate } = useRoute()
  const [lastSearch, setLastSearch] = useState(null)

  const handleSearch = (searchData) => {
    setLastSearch(searchData)
  }

  const renderPage = () => {
    if (route === '/') {
      return (
        <>
          <HomePage onSearch={handleSearch} onNavigate={navigate} />
          {lastSearch && lastSearch.destination && (
            <div className="container mt-4">
              <div className="alert alert-info text-center">
                Showing results for <strong>{lastSearch.destination}</strong>{' '}
                {lastSearch.checkIn && <>on {lastSearch.checkIn}</>} for{' '}
                {lastSearch.guests} guest(s).
              </div>
            </div>
          )}
        </>
      )
    }

    if (route === '/features') return <FeaturesPage />
    if (route === '/testimonials') return <TestimonialsPage />
    if (route === '/404') return <NotFound onNavigate={navigate} />

    return <NotFound onNavigate={navigate} />
  }

  return (
    <>
      <Navbar brandName="Wander" links={navLinks} onNavigate={navigate} />
      <div style={{ paddingTop: '56px' }}>{renderPage()}</div>
      <Footer brandName="Wander Go" socials={socials} onNavigate={navigate} />
    </>
  )
}

export default App
