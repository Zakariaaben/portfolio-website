"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  index?: number
}

export function ProjectCard({ title, description, image, tags, link, github, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 1.02, 0.73, 0.97],
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-xl border-deep-blue-100 dark:border-deep-blue-800 card-hover-effect"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              transition: { duration: 0.4 },
            }}
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-deep-blue-600 text-white backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-deep-blue-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={link} className="mx-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white text-deep-blue-900 hover:bg-deep-blue-50 hover:text-deep-blue-700"
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </Link>
              {github && (
                <Link href={github} className="mx-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white text-deep-blue-900 hover:bg-deep-blue-50 hover:text-deep-blue-700"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Link href={link}>
            <Button variant="default" size="sm" className="group bg-deep-blue-600 hover:bg-deep-blue-700">
              View Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

