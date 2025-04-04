"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SkillNode {
  name: string
  level: string
  category: string
  yearsExperience: number
}

interface SkillVisualizationProps {
  skills: SkillNode[]
  onSkillClick?: (skill: SkillNode) => void
}

export function SkillVisualization({ skills, onSkillClick }: SkillVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Map skill levels to positions
  const levelMap = {
    Beginner: 0.2,
    Intermediate: 0.4,
    Advanced: 0.7,
    Expert: 0.9,
  }

  // Map categories to colors
  const categoryColors = {
    Frontend: "bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    Backend: "bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200",
    DevOps: "bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    Design: "bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
    Other: "bg-deep-blue-200 dark:bg-deep-blue-900 text-deep-blue-800 dark:text-deep-blue-200",
  }

  return (
    <div ref={containerRef} className="mt-12 pt-8 border-t border-deep-blue-100 dark:border-deep-blue-800">
      <h3 className="text-xl font-bold mb-4 text-center">Skill Proficiency Overview</h3>
      <div className="relative h-[300px] overflow-hidden rounded-lg border border-deep-blue-100 dark:border-deep-blue-800 bg-white/5 backdrop-blur-sm">
        <div className="absolute inset-0">
          {/* Horizontal lines for skill levels */}
          <div className="absolute top-[20%] left-0 right-0 border-t border-dashed border-deep-blue-100 dark:border-deep-blue-800 opacity-30"></div>
          <div className="absolute top-[40%] left-0 right-0 border-t border-dashed border-deep-blue-100 dark:border-deep-blue-800 opacity-30"></div>
          <div className="absolute top-[70%] left-0 right-0 border-t border-dashed border-deep-blue-100 dark:border-deep-blue-800 opacity-30"></div>
          <div className="absolute top-[90%] left-0 right-0 border-t border-dashed border-deep-blue-100 dark:border-deep-blue-800 opacity-30"></div>

          {/* Skill bubbles */}
          {skills.map((skill, index) => {
            // Calculate position based on skill level and index
            const position = levelMap[skill.level as keyof typeof levelMap] || 0.5
            const offset = (index % 20) / 20
            const size = skill.yearsExperience * 6 + 24
            const colorClass = categoryColors[skill.category as keyof typeof categoryColors] || categoryColors.Other

            return (
              <motion.div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${offset * 80 + 10}%`,
                  top: `${position * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                onClick={() => onSkillClick && onSkillClick(skill)}
              >
                <div
                  className={`flex items-center justify-center rounded-full ${colorClass} shadow-md transition-all duration-300`}
                  style={{
                    width: size,
                    height: size,
                  }}
                >
                  <div className="text-xs font-medium truncate max-w-[80px] text-center px-1">{skill.name}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Level indicators */}
        <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between pointer-events-none px-4 py-2">
          <div className="text-xs text-muted-foreground">Expert</div>
          <div className="text-xs text-muted-foreground">Advanced</div>
          <div className="text-xs text-muted-foreground">Intermediate</div>
          <div className="text-xs text-muted-foreground">Beginner</div>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-4 flex-wrap">
        {Object.entries(categoryColors).map(([category, colorClass]) => (
          <div key={category} className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full ${colorClass.split(" ")[0]}`}></div>
            <span className="text-xs text-muted-foreground">{category}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2">
        Bubble size represents years of experience. Position represents proficiency level.
      </p>
    </div>
  )
}

