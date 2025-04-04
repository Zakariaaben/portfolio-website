"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 1 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = Math.min(value, 999)
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isInView, value, duration])

  return <div ref={ref}>{count}</div>
}

