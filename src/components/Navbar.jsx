import { useEffect, useState } from 'react'

function Navbar({ brandName, links, onNavigate }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const getFullPath = (href) => `${basePath}${href === '/' ? '/' : href}`

  const handleClick = (event, href) => {
    event.preventDefault()
    onNavigate(href)
    setCurrentPath(getFullPath(href))

    const navbar = document.getElementById('navbarContent')
    if (navbar?.classList.contains('show') && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(navbar).hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a
          className={`navbar-brand fw-bold ${currentPath === getFullPath('/') ? 'active-brand' : ''}`}
          href={getFullPath('/')}
          onClick={(event) => handleClick(event, '/')}
        >
          {brandName} <span>Go</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            {links.map(({ id, label, href }) => {
              const fullPath = getFullPath(href)
              const isActive = currentPath === fullPath

              return (
                <li className="nav-item" key={id}>
                  <a
                    className={`nav-link px-3 ${isActive ? 'active' : ''}`}
                    href={fullPath}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(event) => handleClick(event, href)}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
