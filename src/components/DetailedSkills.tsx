"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Code } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

const initialSkills = [
    {
        title: "React.js",
        icon: `${ASSETS_PREFIX}/assets/images/svg/react.svg`,
        progress: 90,
        color: "bg-blue-400",
        description: "Building interactive user interfaces with React's component-based architecture.",
    },
    {
        title: "Next.js",
        icon: `${ASSETS_PREFIX}/assets/images/svg/next-js.svg`,
        progress: 90,
        color: "bg-black dark:bg-white",
        iconBg: "dark:bg-white",
        description: "The React Framework for the Web, enabling server-side rendering and static site generation.",
    },
    {
        title: "Tailwind CSS",
        icon: `${ASSETS_PREFIX}/assets/images/svg/tailwind-css.svg`,
        progress: 95,
        color: "bg-cyan-500",
        description: "Rapidly building custom user interfaces with Tailwind CSS utility classes.",
    },
    {
        title: "TypeScript",
        icon: `${ASSETS_PREFIX}/assets/images/svg/typescript.svg`,
        progress: 85,
        color: "bg-blue-600",
        description: "Developing robust applications with static typing for better code quality and maintainability.",
    },
    {
        title: "Node.js",
        icon: `${ASSETS_PREFIX}/assets/images/svg/nodejs.svg`,
        progress: 80,
        color: "bg-green-600",
        iconBg: "dark:bg-white",
        description: "Executing JavaScript server-side to build scalable network applications.",
    },
    {
        title: "GitHub",
        icon: `${ASSETS_PREFIX}/assets/images/svg/github.svg`,
        progress: 88,
        color: "bg-gray-800",
        iconBg: "dark:bg-white",
        description: "Collaborating and version controlling projects with Git and GitHub.",
    },
];

const moreSkills = [
    {
        title: "Bootstrap 5",
        icon: `${ASSETS_PREFIX}/assets/images/svg/bootstrap-logo.svg`,
        progress: 90,
        color: "bg-purple-600",
        description: "Building responsive, mobile-first sites with the world's most popular front-end open source toolkit.",
    },
    {
        title: "SCSS",
        icon: `${ASSETS_PREFIX}/assets/images/svg/sass.svg`,
        progress: 85,
        color: "bg-pink-500",
        description: "Writing maintainable and scalable CSS with SASS pre-processor features like variables and nesting.",
    },
    {
        title: "MongoDB",
        icon: `${ASSETS_PREFIX}/assets/images/svg/mongodb.svg`,
        progress: 75,
        color: "bg-green-500",
        description: "Working with NoSQL databases for flexible and scalable data storage.",
    },
    {
        title: "NPM",
        icon: `${ASSETS_PREFIX}/assets/images/svg/npm.svg`,
        progress: 85,
        color: "bg-red-500",
        description: "Managing project dependencies and scripts efficiently with Node Package Manager.",
    },
    {
        title: "Gulp",
        icon: `${ASSETS_PREFIX}/assets/images/svg/gulp.svg`,
        progress: 70,
        color: "bg-red-400",
        description: "Automating workflow tasks like minification and compilation.",
    },
    {
        title: "Vite.js",
        icon: `${ASSETS_PREFIX}/assets/images/svg/vitejs.svg`,
        progress: 80,
        color: "bg-purple-500",
        description: "Next-generation frontend tooling for faster development and builds.",
    },
];

export function DetailedSkills() {
    const [showAll, setShowAll] = React.useState(false);

    return (
        <section className="py-20 bg-secondary/20 transition-all duration-300">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">My Skills & Expertise</h2>
                        <p className="text-muted-foreground">
                            With a blend of development and design skills, I bring creativity and functionality together to deliver high-quality digital experiences.
                        </p>
                    </div>
                    <div className="flex justify-start lg:justify-end">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                        >
                            {showAll ? "Show Less" : "See all services"}
                            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {initialSkills.map((skill, index) => (
                        <SkillCard key={skill.title} skill={skill} index={index} />
                    ))}

                    <AnimatePresence>
                        {showAll && moreSkills.map((skill, index) => (
                            <SkillCard key={skill.title} skill={skill} index={index + initialSkills.length} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: any, index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
        >
            <div className="flex items-start gap-4 mb-4">
                <div className={cn("p-3 bg-secondary rounded-lg", skill.iconBg)}>
                    <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        onError={(e) => {
                            // Fallback if image fails (optional, simple logic)
                            // e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                        {skill.title}
                        <span className="text-sm font-normal text-muted-foreground">{skill.progress}%</span>
                    </h3>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={cn("h-full rounded-full", skill.color)}
                        />
                    </div>
                </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
            </p>
        </motion.div>
    );
}
