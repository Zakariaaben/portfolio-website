"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Layers, Cpu, Palette, BookOpen, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define skill levels with meaningful descriptions instead of percentages
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Define skill categories
type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Design" | "Other";

// Define the skill interface
interface Skill {
    name: string;
    icon: React.ReactNode;
    level: SkillLevel;
    category: SkillCategory;
    description: string;
    relatedSkills: string[];
}

// Map skill levels to colors and descriptions
const skillLevelConfig = {
    Beginner: {
        color: "bg-blue-200 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-200",
        description: "Basic understanding and some practical experience",
    },
    Intermediate: {
        color: "bg-green-200 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-200",
        description: "Solid understanding and regular practical application",
    },
    Advanced: {
        color: "bg-purple-200 dark:bg-purple-900",
        textColor: "text-purple-800 dark:text-purple-200",
        description: "Deep understanding and extensive practical experience",
    },
    Expert: {
        color: "bg-deep-blue-200 dark:bg-deep-blue-900",
        textColor: "text-deep-blue-800 dark:text-deep-blue-200",
        description: "Comprehensive mastery and professional-level expertise",
    },
};

export function SkillsShowcase() {
    const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Define skills data
    const skills: Skill[] = [
        // Frontend Skills
        {
            name: "React",
            icon: <Layers className="h-5 w-5" />,
            level: "Advanced",
            category: "Frontend",
            description:
                "Building complex, interactive UIs with React, Redux, and React Query. Experienced with hooks, context, and performance optimization.",
            relatedSkills: ["JavaScript", "TypeScript", "Next.js"],
        },
        {
            name: "Next.js",
            icon: <Layers className="h-5 w-5" />,
            level: "Advanced",
            category: "Frontend",
            description:
                "Creating server-rendered React applications with Next.js. Experienced with App Router, API routes, and SSR/SSG/ISR strategies.",
            relatedSkills: ["React", "TypeScript", "Vercel"],
        },
        {
            name: "TypeScript",
            icon: <Code className="h-5 w-5" />,
            level: "Intermediate",
            category: "Frontend",
            description:
                "Writing type-safe code with TypeScript. Experienced with interfaces, generics, and advanced type utilities.",
            relatedSkills: ["JavaScript", "React", "Node.js"],
        },
        {
            name: "CSS",
            icon: <Palette className="h-5 w-5" />,
            level: "Advanced",
            category: "Frontend",
            description: "Creating responsive, accessible, and beautiful user interfaces with modern CSS techniques.",
            relatedSkills: ["HTML", "Tailwind CSS", "UI Design"],
        },
        {
            name: "Tailwind CSS",
            icon: <Palette className="h-5 w-5" />,
            level: "Expert",
            category: "Frontend",
            description:
                "Building utility-first CSS with Tailwind. Experienced with customization, plugins, and optimization.",
            relatedSkills: ["CSS", "UI Design", "React"],
        },
        {
            name: "JavaScript",
            icon: <Code className="h-5 w-5" />,
            level: "Expert",
            category: "Frontend",
            description:
                "Writing modern JavaScript with ES6+ features. Experienced with async/await, modules, and functional programming.",
            relatedSkills: ["TypeScript", "React", "Node.js"],
        },

        // Backend Skills
        {
            name: "Node.js",
            icon: <Server className="h-5 w-5" />,
            level: "Advanced",
            category: "Backend",
            description: "Building server-side applications with Node.js. Experienced with Express and RESTful APIs.",
            relatedSkills: ["Express", "JavaScript"],
        },
        {
            name: "Express",
            icon: <Server className="h-5 w-5" />,
            level: "Advanced",
            category: "Backend",
            description:
                "Creating web servers and APIs with Express. Experienced with routing, middleware, and error handling.",
            relatedSkills: ["Node.js", "RESTful API", "MongoDB"],
        },
        {
            name: "Nest JS",
            icon: <Server className="h-5 w-5" />,
            level: "Intermediate",
            category: "Backend",
            description:
                "Building scalable server-side applications with NestJS. Has experience with decorators, modules, and dependency injection.",
            relatedSkills: ["Node.js", "TypeScript", "GraphQL"],
        },
        {
            name: "Prisma",
            icon: <Database className="h-5 w-5" />,
            level: "Intermediate",
            category: "Backend",
            description:
                "Using Prisma for database management. Experienced with migrations, queries, and schema design.",
            relatedSkills: ["Node.js", "PostgreSQL", "MongoDB"],
        },

        // DevOps Skills

        {
            name: "CI/CD",
            icon: <Cpu className="h-5 w-5" />,
            level: "Intermediate",
            category: "DevOps",
            description:
                "Setting up continuous integration and deployment pipelines. Experienced with GitHub Actions and Vercel.",
            relatedSkills: ["Git", "Docker", "Testing"],
        },

        // Design Skills
        {
            name: "UI Design",
            icon: <Palette className="h-5 w-5" />,
            level: "Advanced",
            category: "Design",
            description:
                "Creating user interfaces with a focus on usability and aesthetics. Experienced with design systems and component libraries.",
            relatedSkills: ["UX Design", "CSS", "Figma"],
        },
        {
            name: "Figma",
            icon: <Palette className="h-5 w-5" />,
            level: "Intermediate",
            category: "Design",
            description:
                "Designing and prototyping user interfaces with Figma. Experienced with components, variants, and auto-layout.",
            relatedSkills: ["UI Design", "UX Design", "Prototyping"],
        },

        // Other Skills
        {
            name: "Git",
            icon: <Code className="h-5 w-5" />,
            level: "Expert",
            category: "Other",
            description:
                "Version control with Git. Experienced with branching strategies, pull requests, and conflict resolution.",
            relatedSkills: ["GitHub", "CI/CD", "Collaboration"],
        },
    ];

    // Filter skills by category
    const filteredSkills = skills.filter((skill) => skill.category === activeTab);

    // Find related skills for the selected skill
    const relatedSkills = selectedSkill
        ? skills.filter((skill) => selectedSkill.relatedSkills.includes(skill.name))
        : [];

    // Simplified animation variants
    const itemVariants = {
        initial: { opacity: 0.9, scale: 0.98 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2 },
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.2 },
        },
        selected: {
            scale: 1.03,
            transition: { duration: 0.2 },
        },
    };

    // Render skill card
    const renderSkillCard = (skill: Skill, index: number) => {
        const isSelected = selectedSkill?.name === skill.name;
        const levelConfig = skillLevelConfig[skill.level];

        return (
            <motion.div
                key={skill.name}
                initial="initial"
                animate="animate"
                whileHover={isSelected ? "selected" : "hover"}
                variants={itemVariants}
                className="cursor-pointer"
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                layout
            >
                <Card
                    className={`h-full border-deep-blue-100 dark:border-deep-blue-800 ${
                        isSelected ? "ring-2 ring-deep-blue-500" : ""
                    }`}
                >
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <div className={`p-2 rounded-full ${levelConfig.color}`}>{skill.icon}</div>
                                <CardTitle className="text-lg">{skill.name}</CardTitle>
                            </div>
                            <Badge className={`${levelConfig.color} ${levelConfig.textColor}`}>{skill.level}</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                        {isSelected ? (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start p-0 hover:bg-transparent hover:text-deep-blue-500"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedSkill(null);
                                }}
                            >
                                Show less
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start p-0 hover:bg-transparent hover:text-deep-blue-500"
                            >
                                Show more
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className="w-full">
            <Tabs
                defaultValue="Frontend"
                value={activeTab}
                onValueChange={(value) => {
                    setActiveTab(value as SkillCategory);
                    setSelectedSkill(null);
                }}
                className="w-full"
            >
                <div className="flex justify-center mb-8">
                    <TabsList className="grid grid-cols-5 bg-deep-blue-100/50 dark:bg-deep-blue-900/50 p-1">
                        <TabsTrigger
                            value="Frontend"
                            className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
                        >
                            <Layout className="h-4 w-4" />
                            <span className="hidden sm:inline">Frontend</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="Backend"
                            className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
                        >
                            <Server className="h-4 w-4" />
                            <span className="hidden sm:inline">Backend</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="DevOps"
                            className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
                        >
                            <Cpu className="h-4 w-4" />
                            <span className="hidden sm:inline">DevOps</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="Design"
                            className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
                        >
                            <Palette className="h-4 w-4" />
                            <span className="hidden sm:inline">Design</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="Other"
                            className="flex items-center gap-2 data-[state=active]:bg-deep-blue-600 data-[state=active]:text-white"
                        >
                            <Code className="h-4 w-4" />
                            <span className="hidden sm:inline">Other</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* Skill content for each tab */}
                {["Frontend", "Backend", "DevOps", "Design", "Other"].map((category) => (
                    <TabsContent key={category} value={category} className="mt-0">
                        <div className="space-y-8">
                            {/* Grid of skill cards - without staggered animations */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredSkills.map((skill, index) => renderSkillCard(skill, index))}
                            </div>

                            {/* Selected skill details with simpler animation */}
                            {selectedSkill && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-8"
                                >
                                    <Card className="border-deep-blue-100 dark:border-deep-blue-800">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`p-3 rounded-full ${
                                                            skillLevelConfig[selectedSkill.level].color
                                                        }`}
                                                    >
                                                        {selectedSkill.icon}
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl">{selectedSkill.name}</CardTitle>
                                                        <CardDescription>
                                                            {skillLevelConfig[selectedSkill.level].description}
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                                <Badge
                                                    className={`${skillLevelConfig[selectedSkill.level].color} ${
                                                        skillLevelConfig[selectedSkill.level].textColor
                                                    }`}
                                                >
                                                    {selectedSkill.level}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <h4 className="font-medium mb-2 flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4" /> Experience
                                                </h4>
                                                <p className="text-muted-foreground">{selectedSkill.description}</p>
                                            </div>

                                            {/* Related skills */}
                                            {relatedSkills.length > 0 && (
                                                <div>
                                                    <h4 className="font-medium mb-2 flex items-center gap-2">
                                                        <Zap className="h-4 w-4" /> Related Skills
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {relatedSkills.map((skill) => (
                                                            <Badge
                                                                key={skill.name}
                                                                className="bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 cursor-pointer hover:bg-deep-blue-200 dark:hover:bg-deep-blue-800"
                                                                onClick={() => setSelectedSkill(skill)}
                                                            >
                                                                {skill.name}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
