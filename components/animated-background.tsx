"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  variant?: "dots" | "gradient" | "shapes"
  className?: string
}

export function AnimatedBackground({ variant = "dots", className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (variant !== "dots" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create dots
    const dots: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const dotCount = Math.floor((window.innerWidth * window.innerHeight) / 15000)

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    // Draw dots
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]

        // Move dots
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < dots.length; j++) {
          const otherDot = dots[j]
          const distance = Math.sqrt(Math.pow(dot.x - otherDot.x, 2) + Math.pow(dot.y - otherDot.y, 2))

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant])

  if (variant === "dots") {
    return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
  }

  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue-500/20 via-deep-blue-700/10 to-deep-blue-900/20 animate-gradient-x" />
      </div>
    )
  }

  if (variant === "shapes") {
    return (
      <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-deep-blue-500/10 blur-3xl"
          animate={{
            x: ["-25%", "5%", "-25%"],
            y: ["-25%", "10%", "-25%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-deep-blue-700/10 blur-3xl"
          animate={{
            x: ["60%", "40%", "60%"],
            y: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-deep-blue-300/10 blur-3xl"
          animate={{
            x: ["40%", "60%", "40%"],
            y: ["60%", "40%", "60%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  return null
}

