"use client";

import * as React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { cn } from "@/utils/cn";

const education = [
    {
        year: "2016",
        title: "Secondary School Examination",
        institution: "TVIS Velammal Vidyalaya School",
        description: "Secured First Class with 86% (CGPA: 8.6).",
    },
    {
        year: "2017",
        title: "Higher Secondary Examination",
        institution: "TVIS Velammal International School",
        description: "Secured First Class with 58%. Cleared JEE Mains (Paper 1) in 2018.",
    },
    {
        year: "2018-2021",
        title: "B.Sc Computer Science",
        institution: "Vel Tech University",
        description: "Graduated with First Class (81%). Certified by Madras University.",
    },
    {
        year: "2021-Present",
        title: "Frontend Developer",
        institution: "Freelance & Projects",
        description: "Developed 6+ responsive web applications using React and Bootstrap. Improved page load performance by 30% using optimized assets.",
    },
];

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Frontend Developer with 3+ years of experience building responsive, high-performance web applications using <strong>React and Next.js</strong>.
                        </p>
                        <p className="text-muted-foreground mb-8">
                            Strong in translating UI/UX designs into clean, reusable components and optimizing performance for better user experience. Experienced in Git, API integration, and modern frontend workflows.
                        </p>

                        <div className="bg-card p-6 rounded-xl border shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Award className="text-primary" /> Certificates
                            </h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    Moz SEO Essentials Certificate
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    Semrush Academy courses
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education & Career
                        </h3>

                        <div className="space-y-8 border-l-2 border-primary/20 ml-3 pl-8 relative">
                            {education.map((item, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
                                    <span className="text-sm text-primary font-semibold block mb-1">
                                        {item.year}
                                    </span>
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground font-medium mb-2">
                                        {item.institution}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
