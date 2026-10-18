import React, { useState, useEffect } from 'react'

function shouldSkipIntro() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.get('skip') === '1'
}

export default function IntroGate({ children }) {
  const [isUnmounted, setIsUnmounted] = useState(() => shouldSkipIntro())
  const [isOpenTriggered, setIsOpenTriggered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isOpenTinVisible, setIsOpenTinVisible] = useState(false)
  const [isOverlayFadingOut, setIsOverlayFadingOut] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Preload images to avoid flicker
  useEffect(() => {
    const closedImg = new Image()
    closedImg.src = '/images/closed-tin.png'
    const openImg = new Image()
    openImg.src = '/images/open-tin.png'

    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsReducedMotion(true)
    }
  }, [])

  // Lock page scroll (body overflow hidden) while overlay is visible
  useEffect(() => {
    if (!isUnmounted) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isUnmounted])

  const triggerOpen = () => {
    if (isOpenTriggered || isUnmounted) return
    setIsOpenTriggered(true)

    // Respect prefers-reduced-motion: skip animation and fade overlay out in 200ms
    if (isReducedMotion) {
      setIsOverlayFadingOut(true)
      setTimeout(() => {
        setIsUnmounted(true)
      }, 200)
      return
    }

    // Sequence (approx 1.8s total):
    // 1. "Press to open" fades out (200ms) + quick press-down (scale 0.97 then back)
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
    }, 150)

    // 2. Crossfade to open-tin.png (500ms, starts at 200ms)
    setTimeout(() => {
      setIsOpenTinVisible(true)
    }, 200)

    // 3. Hold open tin for 400ms (200 + 500 + 400 = 1100ms), then fade overlay out (700ms)
    setTimeout(() => {
      setIsOverlayFadingOut(true)
    }, 1100)

    // 4. Unmount overlay completely after animation and re-enable scroll (1100 + 700 = 1800ms)
    setTimeout(() => {
      setIsUnmounted(true)
    }, 1800)
  }

  return (
    <>
      {/* Underlying Page Content */}
      <div
        className={`page-wrapper-underneath ${
          !isUnmounted && isOverlayFadingOut ? 'hero-revealing' : ''
        }`}
      >
        {children}
      </div>

      {/* Intro Overlay */}
      {!isUnmounted && (
        <aside
          className={`intro-overlay ${
            isOverlayFadingOut
              ? isReducedMotion
                ? 'reduced-fade-out'
                : 'fade-out'
              : ''
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Welcome intro"
        >
          <div className="intro-stage">
            {/* Tin & Shadow Container */}
            <div className="intro-tin-area">
              <div
                className={`intro-tin-interactive ${
                  !isOpenTriggered ? 'intro-tin-floating' : ''
                }`}
              >
                <button
                  type="button"
                  className={`intro-tin-trigger-btn ${isPressed ? 'pressed' : ''}`}
                  onClick={triggerOpen}
                  aria-label="Open Nothing But Crumble cookie tin"
                >
                  {/* Closed Tin Image */}
                  <img
                    src="/images/closed-tin.png"
                    alt="Sealed gold keepsake cookie tin"
                    className={`intro-tin-img intro-tin-closed ${
                      isOpenTinVisible ? 'fade-out' : ''
                    }`}
                  />

                  {/* Open Tin Image */}
                  <img
                    src="/images/open-tin.png"
                    alt="Open gold cookie tin with freshly baked cookies"
                    className={`intro-tin-img intro-tin-open ${
                      isOpenTinVisible ? 'fade-in' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Soft elliptical shadow under the tin */}
              <div
                className={`intro-tin-shadow ${
                  !isOpenTriggered ? 'intro-shadow-floating' : ''
                }`}
                aria-hidden="true"
              />
            </div>

            {/* "Press to open" action button */}
            {/* Currently: */}
<button type="button" className={`intro-open-btn ${isOpenTriggered ? 'btn-fading-out' : ''}`}>
  Press to open
</button>

{/* Cute alternative: */}
<button type="button" className={`intro-open-btn ${isOpenTriggered ? 'btn-fading-out' : ''}`}>
  Tap to uncap the tin ✨
</button>
          </div>
        </aside>
      )}
    </>
  )
}
