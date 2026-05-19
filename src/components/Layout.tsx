import { useEffect, useState, type ReactNode } from 'react'
import { NAV_LINKS } from '../constants'
import { profile } from '../data/profile'
import { FooterSocial } from './FooterSocial'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavBrand, setShowNavBrand] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setShowNavBrand(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="layout">
      <header className="nav">
        <div className="nav__inner">
          <a
            href="#"
            className={`nav__brand${showNavBrand ? ' nav__brand--visible' : ''}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden={!showNavBrand}
            tabIndex={showNavBrand ? 0 : -1}
          >
            {profile.name}
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
          <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer" id="contact">
        <div className="container footer__inner">
          <p className="footer__label">Get in touch</p>
          <FooterSocial />
          <p className="footer__copy">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </div>
  )
}
