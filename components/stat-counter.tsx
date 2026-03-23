'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  endValue: number
  label: string
  suffix?: string
  duration?: number
  highlight?: boolean
  footnote?: string
}

export function StatCounter({
  endValue,
  label,
  suffix = '',
  duration = 2000,
  highlight = false,
  footnote,
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic

      setCount(Math.floor(endValue * eased))

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isVisible, endValue, duration])

  return (
    <div
      ref={ref}
      className={`${highlight ? 'md:col-span-2' : ''}`}
    >
      <p
        className="text-5xl sm:text-6xl font-bold mb-2"
        style={{
          background: 'linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </p>
      <p className="text-base font-semibold text-white mb-1">{label}</p>
      {footnote && (
        <p className="text-sm italic" style={{ color: '#64748b' }}>{footnote}</p>
      )}
    </div>
  )
}
