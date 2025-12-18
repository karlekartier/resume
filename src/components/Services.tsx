"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Palette, Video, Code, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const services = [
    {
        title: "Graphic Design",
        description: "Crafting visually stunning designs that communicate your brand's message effectively. From logos to marketing materials, we cover it all.",
        icon: Palette,
    },
    {
        title: "Video Creation",
        description: "Producing engaging video content that captures attention and tells your story. Perfect for social media, ads, and corporate presentations.",
        icon: Video,
    },
    {
        title: "Web Development",
        description: "Building modern, responsive, and high-performance websites tailored to your needs. We ensure a seamless user experience across all devices.",
        icon: Code,
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We offer a wide range of creative services to help your business grow.
                        Explore what we can do for you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-6">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                Learn more <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
