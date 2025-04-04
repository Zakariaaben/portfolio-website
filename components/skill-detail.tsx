"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Layers, Zap } from "lucide-react"

interface SkillDetailProps {
  skill: {
    name: string
    icon: React.ReactNode
    level: string
    description: string
    yearsExperience: number
    relatedSkills: string[]
    projects?: { name: string; link: string }[]
  }
  levelConfig: {
    color: string
    textColor: string
    description: string
  }
  onRelatedSkillClick: (skillName: string) => void
  relatedSkills: any[]
}

export function SkillDetail({ skill, levelConfig, onRelatedSkillClick, relatedSkills }: SkillDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-8"
    >
      <Card className="border-deep-blue-100 dark:border-deep-blue-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${levelConfig.color}`}>{skill.icon}</div>
              <div>
                <CardTitle className="text-xl">{skill.name}</CardTitle>
                <CardDescription>{levelConfig.description}</CardDescription>
              </div>
            </div>
            <Badge className={`${levelConfig.color} ${levelConfig.textColor}`}>{skill.level}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Experience
            </h4>
            <p className="text-muted-foreground">{skill.description}</p>
          </div>

          {/* Related skills */}
          {relatedSkills.length > 0 && (
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4" /> Related Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {relatedSkills.map((relatedSkill) => (
                  <Badge
                    key={relatedSkill.name}
                    className="bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 cursor-pointer hover:bg-deep-blue-200 dark:hover:bg-deep-blue-800"
                    onClick={() => onRelatedSkillClick(relatedSkill)}
                  >
                    {relatedSkill.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Projects using this skill */}
          {skill.projects && skill.projects.length > 0 && (
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Layers className="h-4 w-4" /> Projects Using This Skill
              </h4>
              <ul className="space-y-2">
                {skill.projects.map((project) => (
                  <li key={project.name} className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-deep-blue-500" />
                    <Link href={project.link} className="text-deep-blue-600 dark:text-deep-blue-400 hover:underline">
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

