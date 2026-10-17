import { useEffect, useRef, useCallback } from 'react'

/* -------------------------------------------------------
   useScrollAnimation — Intersection Observer hook
   for animating elements on scroll
   ------------------------------------------------------- */
export function useScrollAnimation() {
  const observerRef = useRef(null)

  const observe = useCallback((node) => {
    if (!node) return

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || 0
              setTimeout(() => {
                entry.target.classList.add('visible')
              }, Number(delay))
              observerRef.current?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      )
    }

    observerRef.current.observe(node)
  }, [])

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return observe
}

/* -------------------------------------------------------
   AnimatedElement — wrapper that triggers scroll animation
   ------------------------------------------------------- */
export function AnimatedElement({ children, delay = 0, type = 'fade-up', className = '', ...props }) {
  const ref = useRef(null)
  const observe = useScrollAnimation()

  useEffect(() => {
    if (ref.current) {
      observe(ref.current)
    }
  }, [observe])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${type === 'fade-in' ? 'fade-in' : ''} ${className}`}
      data-delay={delay}
      {...props}
    >
      {children}
    </div>
  )
}
