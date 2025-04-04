"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Layers, Cpu, Globe, Palette } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  const frontendSkills = [
    { name: "HTML5", level: 90, icon: <Globe className="h-4 w-4" /> },
    { name: "CSS3/SASS", level: 85, icon: <Palette className="h-4 w-4" /> },
    { name: "JavaScript", level: 90, icon: <Code className="h-4 w-4" /> },
    { name: "TypeScript", level: 80, icon: <Code className="h-4 w-4" /> },
    { name: "React", level: 85, icon: <Layers className="h-4 w-4" /> },
    { name: "Next.js", level: 80, icon: <Layers className="h-4 w-4" /> },
    { name: "Tailwind CSS", level: 90, icon: <Palette className="h-4 w-4" /> },
    { name: "Framer Motion", level: 75, icon: <Layers className="h-4 w-4" /> },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85, icon: <Server className="h-4 w-4" /> },
    { name: "Express", level: 80, icon: <Server className="h-4 w-4" /> },
    { name: "MongoDB", level: 75, icon: <Database className="h-4 w-4" /> },
    { name: "PostgreSQL", level: 70, icon: <Database className="h-4 w-4" /> },
    { name: "GraphQL", level: 65, icon: <Code className="h-4 w-4" /> },
    { name: "REST API", level: 85, icon: <Globe className="h-4 w-4" /> },
    { name: "Firebase", level: 75, icon: <Database className="h-4 w-4" /> },
    { name: "AWS", level: 60, icon: <Server className="h-4 w-4" /> },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 85, icon: <Code className="h-4 w-4" /> },
    { name: "Docker", level: 65, icon: <Cpu className="h-4 w-4" /> },
    { name: "CI/CD", level: 70, icon: <Cpu className="h-4 w-4" /> },
    { name: "Testing", level: 75, icon: <Code className="h-4 w-4" /> },
    { name: "Responsive Design", level: 90, icon: <Palette className="h-4 w-4" /> },
    { name: "UI/UX Design", level: 75, icon: <Palette className="h-4 w-4" /> },
    { name: "Performance", level: 80, icon: <Cpu className="h-4 w-4" /> },
    { name: "SEO", level: 70, icon: <Globe className="h-4 w-4" /> },
  ]

  return (
    <div className="mt-12">
      <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-deep-blue-100/50 dark:bg-deep-blue-900/50 p-1">
            <TabsTrigger
              value="frontend"
              className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
            >
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Frontend</span>
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
            >
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Backend</span>
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
            >
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Other</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="frontend" className="mt-6">
          <Card className="border-deep-blue-100 dark:border-deep-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-deep-blue-600">
                <Layout className="h-5 w-5" />
                Frontend Development
              </CardTitle>
              <CardDescription>
                Creating responsive, accessible, and performant user interfaces with modern frameworks and tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 sm:grid-cols-2">
                {frontendSkills.map((skill, index) => (
                  <motion.div key={skill.name} variants={item} custom={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-deep-blue-100 text-deep-blue-600 dark:bg-deep-blue-900 dark:text-deep-blue-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-deep-blue-100 dark:bg-deep-blue-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-deep-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend" className="mt-6">
          <Card className="border-deep-blue-100 dark:border-deep-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-deep-blue-600">
                <Server className="h-5 w-5" />
                Backend Development
              </CardTitle>
              <CardDescription>
                Building robust, scalable, and secure server-side applications and APIs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 sm:grid-cols-2">
                {backendSkills.map((skill, index) => (
                  <motion.div key={skill.name} variants={item} custom={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-deep-blue-100 text-deep-blue-600 dark:bg-deep-blue-900 dark:text-deep-blue-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-deep-blue-100 dark:bg-deep-blue-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-deep-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="other" className="mt-6">
          <Card className="border-deep-blue-100 dark:border-deep-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-deep-blue-600">
                <Code className="h-5 w-5" />
                Other Skills
              </CardTitle>
              <CardDescription>
                Additional technical skills and tools that complement my development workflow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 sm:grid-cols-2">
                {otherSkills.map((skill, index) => (
                  <motion.div key={skill.name} variants={item} custom={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-deep-blue-100 text-deep-blue-600 dark:bg-deep-blue-900 dark:text-deep-blue-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-deep-blue-100 dark:bg-deep-blue-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-deep-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

