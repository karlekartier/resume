"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PenTool, TrendingUp, Layout, Brain, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";
import { useVersion } from "@/components/version-provider";

const tabs = [
    {
        id: "frontend",
        label: "Front-End Development",
        icon: Layout,
        content: {
            title: "Front-End Development",
            description: (
                <p>
                    Crafting seamless, responsive, & user-friendly web experiences <strong>using React, Next.js, Tailwind CSS, & Bootstrap.</strong> With a focus on clean code & modern UI/UX principles, I ensure visually stunning & high-performing websites.
                </p>
            ),
            image: `${ASSETS_PREFIX}/assets/images/vs_deploy.webp`,
        },
    },
    {
        id: "tools",
        label: "Development Tools",
        icon: PenTool,
        content: {
            title: "Development Workflow & Tools",
            description: (
                <div className="space-y-4">
                    <div>
                        <h5 className="font-semibold text-primary">Version Control & Collaboration</h5>
                        <p className="text-muted-foreground text-sm">Proficient in Git & GitHub for version control, ensuring smooth collaboration and code management.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-primary">IDE & Environment</h5>
                        <p className="text-muted-foreground text-sm">Expert in VS Code with optimized extensions for productivity and code quality.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-primary">API Integration</h5>
                        <p className="text-muted-foreground text-sm">Experienced in consuming RESTful APIs to bring dynamic data into applications.</p>
                    </div>
                </div>
            ),
            image: `${ASSETS_PREFIX}/assets/images/icons/vs-code.svg`, // Using existing icon as placeholder image if specific one not available, or keep existing AI one if preferred. I'll stick to a relevant available image.
        },
    },
];

const styles = {
    "v2.0": {
        dots: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]",
        blueBlob: "bg-blue-500/20 opacity-30 blur-[100px]",
        purpleBlob: "bg-purple-500/20 opacity-30 blur-[100px]"
    },
    "v2.1": {
        dots: "bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)]",
        blueBlob: "bg-blue-500/50 blur-[80px]",
        purpleBlob: "bg-purple-500/40 blur-[80px]"
    }
} as const;

export function Toolkit() {
    const [activeTab, setActiveTab] = React.useState("frontend");
    const { version } = useVersion();
    const currentStyle = styles[version];

    return (
        <section id="toolkit" className="relative py-20 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background">
                {/* Dot Pattern */}
                <div className={cn(
                    "absolute inset-0 dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]",
                    currentStyle.dots
                )}></div>

                {/* Colorful Gradient Blobs */}
                <div className={cn(
                    "absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full dark:bg-blue-500/10 dark:blur-[100px]",
                    currentStyle.blueBlob
                )}></div>
                <div className={cn(
                    "absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full dark:bg-purple-500/10 dark:blur-[100px]",
                    currentStyle.purpleBlob
                )}></div>
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Professional work Toolkit</h2>
                    <p className="text-muted-foreground">
                        With hands-on expertise in these tools, I streamline workflows, enhance creativity, & bring innovative ideas to life!
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all",
                                activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-secondary/20 rounded-2xl p-6 lg:p-12 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) => (
                            tab.id === activeTab && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Text */}
                                    <div className="text-center lg:text-left">
                                        <h3 className="text-2xl font-bold mb-6">{tab.content.title}</h3>
                                        <div className="text-muted-foreground leading-relaxed">
                                            {tab.content.description}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-full max-w-[500px] aspect-video lg:aspect-square flex items-center justify-center bg-white/5 rounded-xl p-4">
                                            <Image
                                                src={tab.content.image}
                                                alt={tab.label}
                                                width={500}
                                                height={400}
                                                className="w-full h-auto max-h-[400px] object-contain drop-shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
