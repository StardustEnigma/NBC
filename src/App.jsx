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
      ? 'The Signature Duet Nothing But Crumble cookie tin with red velvet, triple chocolate, and brown butter cookies'
      : 'The Gooey Deep-Dish Nothing But Crumble giant warm cookie in golden keepsake tin'

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
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  The Duet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  The Tin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Ingredients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Engrave
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="btn-nav-outline"
            onClick={(e) => e.preventDefault()}
          >
            Explore Tins
          </button>
        </div>
      </header>

      {/* Main Single Page: Hero Front Page Only */}
      <main>
        <section className="hero-wrapper" id="hero">
          <div className="site-container">
            <div className="hero-split-grid">
              {/* Left Column: Left-aligned content */}
                            {/* Left Column: Left-aligned content */}
              <div className="hero-content-col">
                <h1 className="hero-title">
                  Cookies worth{' '}
                  <span className="headline-italic-pink">keeping the tin for.</span>
                </h1>

                <p className="hero-subtitle">
                  Rich brown butter dough, molten puddle centres, and a pinch of flaky sea salt. Sealed warm inside our collectible keepsake tin, baked fresh daily in London.
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
                    The Signature Duet
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTin === 'gooey'}
                    className="hero-tab-btn"
                    onClick={() => setActiveTin('gooey')}
                  >
                    The Gooey Deep-Dish
                  </button>
                </div>

                {/* Hero Action Buttons */}
                <div className="hero-actions">
                  <button
                    type="button"
                    className="btn-primary-teal"
                    onClick={(e) => e.preventDefault()}
                  >
                    Taste The Duet
                  </button>

                  <button
                    type="button"
                    className="link-secondary-underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    Peek Inside 🍪
                  </button>
                </div>

                {/* Feature Row */}
                <div className="hero-feature-row">
                  <span className="feature-item">Fresh for 21 days (if they last!)</span>
                  <span className="feature-divider" aria-hidden="true" />
                  <span className="feature-item">100% Normandy butter</span>
                  <span className="feature-divider" aria-hidden="true" />
                  <span className="feature-item">Forever keepsake tin</span>
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
