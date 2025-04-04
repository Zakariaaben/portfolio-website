"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
}

export function BlogPostCard({ title, excerpt, date, image, link }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg"
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
        </div>
        <CardHeader>
          <CardDescription>{date}</CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <Link href={link} className="group inline-flex items-center text-sm font-medium text-primary">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

