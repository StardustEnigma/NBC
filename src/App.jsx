import React, { useState, useEffect } from 'react'
import IntroGate from './components/IntroGate'

export default function App() {
  const [activeTin, setActiveTin] = useState('assorted') // 'assorted' | 'gooey'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroImageSrc =
    activeTin === 'assorted'
      ? '/images/golden-tin-assorted.png'
      : '/images/gooey-tin-cookie.png'

  const heroImageAlt =
    activeTin === 'assorted'
      ? 'The Grand Assorted Nothing But Crumble cookie tin with red velvet, triple chocolate, and brown butter cookies'
      : 'The Molten Deep-Dish Nothing But Crumble giant warm cookie in golden keepsake tin'

  return (
    <IntroGate>
      {/* Navigation (Preserved appearance, all links/buttons non-navigating) */}
      <header className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="site-container nav-inner">
          <a
            href="#"
            className="nav-brand"
            onClick={(e) => e.preventDefault()}
            aria-label="Nothing But Crumble"
          >
            <div className="nav-emblem">
              <img src="/images/brand-logo.jpg" alt="Nothing But Crumble" />
            </div>
            <span className="nav-name">Nothing But Crumble</span>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li>
                <a
                  href="#flavours"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  The Flavours
                </a>
              </li>
              <li>
                <a
                  href="#tin"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  The Keepsake Tin
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  How to Order
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="https://www.instagram.com/nothingbutcrumble/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-order"
          >
            ORDER ON INSTAGRAM
          </a>
        </div>
      </header>

      {/* Main Single Page: Hero Front Page Only */}
      <main>
        <section className="hero-wrapper" id="hero">
          <div className="site-container">
            <div className="hero-split-grid">
              {/* Left Column: Left-aligned content */}
              <div className="hero-content-col">
                <h1 className="hero-title">
                  Cookies worth<br className="desktop-break" /> keeping the tin for.
                </h1>

                <p className="hero-subtitle">
                  Three signature flavours, 100% vegetarian and baked to order in Nagpur. Sealed inside our keepsake gold tin.
                </p>

                {/* Product Selection Tabs */}
                <div className="hero-tabs-row" role="tablist" aria-label="Cookie tin selection">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTin === 'assorted'}
                    className="hero-tab-btn"
                    onClick={() => setActiveTin('assorted')}
                  >
                    The Assorted Tin
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTin === 'gooey'}
                    className="hero-tab-btn"
                    onClick={() => setActiveTin('gooey')}
                  >
                    The Molten Deep-Dish
                  </button>
                </div>

                {/* Hero Action Buttons */}
                <div className="hero-actions">
                  <a
                    href="https://www.instagram.com/nothingbutcrumble/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-green"
                  >
                    ORDER ON INSTAGRAM
                  </a>

                  <button
                    type="button"
                    className="btn-secondary-green"
                    onClick={(e) => e.preventDefault()}
                  >
                    VIEW GALLERY
                  </button>
                </div>

                {/* Feature Row / Product Benefits with visible spacing */}
                <div className="hero-feature-row">
                  <span className="feature-item">100% Vegetarian</span>
                  <span className="feature-item">Made to Order</span>
                  <span className="feature-item">Keepsake Gold Tin</span>
                </div>
              </div>

              {/* Right Column: Centered tin in arch panel with 1px gold hairline frame */}
              <div className="hero-visual-col">
                <div className="arch-container-wrapper">
                  <div className="arch-frame">
                    <img
                      key={heroImageSrc}
                      src={heroImageSrc}
                      alt={heroImageAlt}
                      className="tin-mount-fadeup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </IntroGate>
  )
}
