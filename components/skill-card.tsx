"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  skill: {
    name: string
    category: string
    imageSrc: string
  }
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full border-deep-blue-100 dark:border-deep-blue-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{skill.name}</CardTitle>
            <Badge
              variant="outline"
              className="bg-deep-blue-50 text-deep-blue-700 dark:bg-deep-blue-900 dark:text-deep-blue-300"
            >
              {skill.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Fallback for missing images */}
            <div className="w-16 h-16 rounded-full bg-deep-blue-100 dark:bg-deep-blue-900 flex items-center justify-center text-deep-blue-600 dark:text-deep-blue-300 text-xl font-bold">
              {skill.name.charAt(0)}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

