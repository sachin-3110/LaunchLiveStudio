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
      
      setCount(Math.floor(endValue * progress))

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isVisible, endValue, duration])

  return (
    <div
      ref={ref}
      className={`${highlight ? 'md:col-span-2' : ''} animate-slide-up`}
    >
      <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-base font-medium text-foreground mb-1">{label}</p>
      {footnote && <p className="text-sm text-gray-600 dark:text-gray-400 italic">{footnote}</p>}
    </div>
  )
}
