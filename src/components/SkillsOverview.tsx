"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

const skills = [
    {
        title: "Development & Coding Tools",
        icon: `${ASSETS_PREFIX}/assets/images/svg/antigravity.svg`,
    },
    {
        title: "ChatGPT & AI Tools",
        icon: `${ASSETS_PREFIX}/assets/images/icons/chatgpt.svg`,
    },
    {
        title: "Analytics & Optimization",
        icon: `${ASSETS_PREFIX}/assets/images/svg/google-analytics-3.svg`,
    },
    {
        title: "Design & UI",
        icon: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/adobe-creative-cloud.svg`,
    },
];

export function SkillsOverview() {
    return (
        <section className="py-12 bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold">Professional Skillset & Expertise</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={skill.icon}
                                    alt={skill.title}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 object-contain"
                                />
                            </div>
                            <h3 className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {skill.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
