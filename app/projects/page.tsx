import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { AnimatedBackground } from "@/components/animated-background"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground variant="shapes" />
      <div className="container px-4 py-12 md:px-6 md:py-24 relative z-10">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="group mb-8 hover:bg-deep-blue-50 dark:hover:bg-deep-blue-900">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gradient">Projects</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my work, showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-featured e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments."
            image="/placeholder.svg?height=600&width=800"
            tags={["Next.js", "React", "Tailwind CSS", "Stripe"]}
            link="#"
            index={0}
          />
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates and team collaboration features."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Node.js", "Socket.io", "MongoDB"]}
            link="#"
            index={1}
          />
          <ProjectCard
            title="Portfolio Website"
            description="A responsive portfolio website for a photographer, featuring a custom image gallery and contact form."
            image="/placeholder.svg?height=600&width=800"
            tags={["HTML", "CSS", "JavaScript", "PHP"]}
            link="#"
            index={2}
          />
          <ProjectCard
            title="Weather Dashboard"
            description="A weather dashboard that displays current weather conditions and forecasts for multiple locations."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "OpenWeather API", "Chart.js"]}
            link="#"
            index={3}
          />
          <ProjectCard
            title="Recipe App"
            description="A recipe application that allows users to search for recipes, save favorites, and create shopping lists."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Firebase", "Tailwind CSS"]}
            link="#"
            index={4}
          />
          <ProjectCard
            title="Social Media Dashboard"
            description="A dashboard that displays analytics and metrics for various social media platforms."
            image="/placeholder.svg?height=600&width=800"
            tags={["Vue.js", "D3.js", "Express"]}
            link="#"
            index={5}
          />
          <ProjectCard
            title="Real Estate Listing"
            description="A real estate listing website with property search, filtering, and map integration."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Node.js", "MongoDB", "Google Maps API"]}
            link="#"
            index={6}
          />
          <ProjectCard
            title="Fitness Tracker"
            description="A fitness tracking application that allows users to log workouts, track progress, and set goals."
            image="/placeholder.svg?height=600&width=800"
            tags={["React Native", "Firebase", "Chart.js"]}
            link="#"
            index={7}
          />
          <ProjectCard
            title="Music Streaming App"
            description="A music streaming application with playlist creation, user authentication, and audio playback."
            image="/placeholder.svg?height=600&width=800"
            tags={["React", "Node.js", "MongoDB", "Web Audio API"]}
            link="#"
            index={8}
          />
        </div>
      </div>
    </div>
  )
}

