import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Layers, Mail, Monitor, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedText } from "@/components/animated-text";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { BlogPostCard } from "@/components/blog-post-card";
import { SkillsShowcase } from "@/components/skills-showcase";
import { AnimatedBackground } from "@/components/animated-background";
import { ParallaxSection } from "@/components/parallax-section";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <ScrollProgress />

            {/* Hero Section */}
            <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
                <AnimatedBackground variant="shapes" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <Badge
                                    className="inline-flex mb-2 bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100"
                                    variant="outline"
                                >
                                    Available
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    <AnimatedText text="Full-Stack Developer" />
                                </h1>
                                <h2 className="text-xl font-medium text-deep-blue-600 dark:text-deep-blue-400 sm:text-2xl">
                                    Zakaria Benhamiche
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Building digital experiences that blend creativity with technical excellence.
                                    Transforming ideas into elegant, functional solutions.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="#contact">
                                    <Button size="lg" className="group bg-deep-blue-600 hover:bg-deep-blue-700">
                                        Get in touch
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Link href="#projects">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-deep-blue-200 dark:border-deep-blue-800 hover:bg-deep-blue-50 dark:hover:bg-deep-blue-900"
                                    >
                                        View my work
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <Link
                                    href="https://github.com/zakariaaben"
                                    className="flex items-center gap-1 hover:text-deep-blue-600 dark:hover:text-deep-blue-400 transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    <span>GitHub</span>
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/zakariabenhamiche"
                                    //open in new tab
                                    target="_blank"
                                    className="flex items-center gap-1 hover:text-deep-blue-600 dark:hover:text-deep-blue-400 transition-colors"
                                >
                                    <Monitor className="h-4 w-4" />
                                    <span>LinkedIn</span>
                                </Link>
                                <Link
                                    href="mailto:nz_benhamiche@esi.dz"
                                    className="flex items-center gap-1 hover:text-deep-blue-600 dark:hover:text-deep-blue-400 transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                    <span>Email</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="absolute -left-8 -top-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] rounded-3xl bg-gradient-to-br from-deep-blue-500/20 to-deep-blue-700/20 opacity-80 blur-3xl animate-pulse-slow"></div>
                            <div className="relative rounded-xl border border-deep-blue-100 dark:border-deep-blue-800 bg-background p-8 shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="space-y-2 rounded-lg bg-muted p-4 font-mono text-sm">
                                        <div className="text-muted-foreground">
                                            <span className="text-deep-blue-500">const</span>{" "}
                                            <span className="text-green-500">developer</span> ={" "}
                                            <span className="text-orange-500">{"{"}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-deep-blue-400">name</span>:{" "}
                                            <span className="text-amber-500">&apos;Zakaria Benhamiche&apos;</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-deep-blue-400">skills</span>:{" "}
                                            <span className="text-orange-500">{"["}</span>
                                            <span className="text-amber-500">&apos;React&apos;</span>,{" "}
                                            <span className="text-amber-500">&apos;Next JS&apos;</span>,{" "}
                                            <span className="text-amber-500">&apos;TypeScript&apos;</span>
                                            <span className="text-orange-500">{"]"}</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-deep-blue-400">passion</span>:{" "}
                                            <span className="text-amber-500">
                                                &apos;Building incredible web experiences&apos;
                                            </span>
                                        </div>
                                        <div className="text-orange-500">{"}"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
                <div className="scroll-indicator hidden md:block"></div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
                <AnimatedBackground variant="dots" className="opacity-30" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="flex flex-col items-center justify-center space-y-2 border-r border-deep-blue-100 dark:border-deep-blue-800 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-3xl font-bold text-deep-blue-600">
                                <AnimatedCounter value={2} duration={1} />+
                            </div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2 border-r border-deep-blue-100 dark:border-deep-blue-800 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-3xl font-bold text-deep-blue-600">
                                <AnimatedCounter value={6} duration={1} />+
                            </div>
                            <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2 border-r border-deep-blue-100 dark:border-deep-blue-800 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-3xl font-bold text-deep-blue-600">
                                <AnimatedCounter value={4} duration={2} />+
                            </div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2 border-r border-deep-blue-100 dark:border-deep-blue-800 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-3xl font-bold text-deep-blue-600">
                                <AnimatedCounter value={7} duration={2} />+
                            </div>
                            <div className="text-sm text-muted-foreground">Technologies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
                <AnimatedBackground variant="gradient" />
                <ParallaxSection className="container px-4  overflow-visible md:px-6 relative z-10">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 px-3 py-1 text-sm">
                                About Me
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                                Passionate about creating exceptional digital experiences
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I'm a full-stack developer with a passion for building beautiful, functional, and
                                user-friendly websites and applications. With over 2 years of experience in the
                                industry, I've worked on a good range of projects, from small business websites to
                                medium scale enterprise applications. Actually a 2 year student at ESI Algiers, I am
                                always eager to learn and grow in my field.
                            </p>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                My journey in web development just before entering college, where I discovered my love
                                for coding and problem-solving. Since then, I've been constantly learning and improving
                                my skills to stay up-to-date with the latest technologies and best practices.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-deep-blue-200 dark:border-deep-blue-800 animate-float">
                                <Image
                                    src="/1728207953411.jpg?height=800&width=800"
                                    alt="Developer portrait"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </section>

            {/* Skills Section */}
            <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
                <AnimatedBackground variant="dots" className="opacity-70" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 px-3 py-1 text-sm">
                                Skills
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                                My Technical Expertise
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I specialize in full-stack development, with a focus on creating responsive, accessible,
                                and performant web applications.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <SkillsShowcase />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
                <AnimatedBackground variant="gradient" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 px-3 py-1 text-sm">
                                Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                                Featured Work
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A selection of my recent projects, showcasing my skills and expertise in web
                                development.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                        <ProjectCard
                            title="E-commerce Platform"
                            description="A full-featured e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments."
                            image="/placeholder.svg?height=600&width=800"
                            tags={["Next.js", "React", "Tailwind CSS", "Prisma"]}
                            link="#"
                            index={0}
                        />
                        <ProjectCard
                            title="Asset Maintainence App"
                            description="A Project made in collaboration with ESI for a second year project."
                            image="/placeholder.svg?height=600&width=800"
                            tags={["Next JS", "Tailwind CSS", "Prisma", "Nest JS"]}
                            link="#"
                            index={1}
                        />
                        <ProjectCard
                            title="Portfolio Website"
                            description="Build personal portfolio website to showcase my projects and skills."
                            image="/placeholder.svg?height=600&width=800"
                            tags={["React", "CSS", "JavaScript", "PHP"]}
                            link="#"
                            index={2}
                        />
                        <ProjectCard
                            title="Architecture Website"
                            description="A responsive website for an architect, showcasing their portfolio and services with an interactive dashboard."
                            image="/placeholder.svg?height=600&width=800"
                            tags={["React", "OpenWeather API", "Chart.js"]}
                            link="https://patriarchplus.com"
                            index={3}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
                <AnimatedBackground variant="gradient" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-deep-blue-100 text-deep-blue-800 dark:bg-deep-blue-900 dark:text-deep-blue-100 px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                                Get in Touch
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Have a project in mind or want to discuss a potential collaboration? I'd love to hear
                                from you. Fill out the form and I'll get back to you as soon as possible.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-deep-blue-600" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-muted-foreground">nz_benhamiche@esi.dz</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Monitor className="h-6 w-6 text-deep-blue-600" />
                                    <div>
                                        <h3 className="font-medium">Social</h3>
                                        <div className="flex space-x-4 pt-2">
                                            <Link
                                                href="https://github.com/zakariaaben"
                                                className="text-muted-foreground hover:text-deep-blue-600"
                                            >
                                                <Github className="h-5 w-5" />
                                                <span className="sr-only">GitHub</span>
                                            </Link>
                                            <Link
                                                href="https://linkedin.com/in/zakariabenhamiche"
                                                target="_blank"
                                                className="text-muted-foreground hover:text-deep-blue-600"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                <span className="sr-only">LinkedIn</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-deep-blue-100 dark:border-deep-blue-800 bg-background py-6">
                <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                    <div className="flex items-center gap-2">
                        <Layers className="h-6 w-6 text-deep-blue-600" />
                        <span className="text-lg font-bold">Zakaria Benhamiche</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} Zakaria Benhamiche. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
