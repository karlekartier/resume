"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

const projects = [
    {
        title: "Portfolio Website",
        description: "A fully responsive developer portfolio built with Next.js, React, and Tailwind CSS. Features smooth animations, dark mode, and a modular component architecture.",
        tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        image: `${ASSETS_PREFIX}/assets/images/vs_deploy.webp`, // Placeholder image
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "Optimista",
        description: "End-to-end development of a comprehensive business platform. Handled both frontend and backend aspects to deliver a seamless user experience.",
        tech: ["Bootstrap 5", "Node.js", "Express.js", "Gulp"],
        image: `${ASSETS_PREFIX}/assets/images/optimista.png`,
        liveLink: "https://www.optimista.in",
        githubLink: "#",
    },
    {
        title: "Task Management App",
        description: "A productivity application for managing daily tasks and projects. Supports drag-and-drop organization, priority setting, and user authentication.",
        tech: ["React", "Firebase", "Material UI"],
        image: `${ASSETS_PREFIX}/assets/images/icons/google.svg`, // Placeholder
        liveLink: "#",
        githubLink: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                    <p className="text-muted-foreground text-lg">
                        A selection of projects that demonstrate my expertise in frontend development and ability to deliver high-quality web solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="relative h-48 w-full bg-secondary/50 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.liveLink} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <a href={project.githubLink} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <a href={project.liveLink} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                                    View Details <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/karlekartier" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                        <Github className="w-5 h-5 mr-2" /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
