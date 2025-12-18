"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    Sparkles,
    Grid,
    Paintbrush,
    Laptop,
    Video,
    Banknote,
    Zap,
    Rocket,
    Gem,
    HelpCircle,
    Clock,
    ShieldCheck,
    MessageCircle
} from "lucide-react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { ASSETS_PREFIX } from "@/utils/constants";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 text-center">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Transforming Ideas Into Digital Experiences
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                            Design, Websites & Content that help brands stand out and grow.
                        </p>

                        <div className="relative w-full max-w-4xl mx-auto aspect-video">
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/servicesmainlight.svg`}
                                alt="Services Hero Illustration"
                                fill
                                className="dark:hidden object-contain"
                                priority
                            />
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/servicesmaindark.svg`}
                                alt="Services Hero Illustration"
                                fill
                                className="hidden dark:block object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                            <Grid className="h-8 w-8 text-primary" /> Services
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Graphic Design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2"
                        >
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Paintbrush className="h-6 w-6 text-primary" /> Graphic Design
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Logo Design & Branding</li>
                                <li>• Business Cards & Marketing Kits</li>
                                <li>• Posters & Campaign Ads</li>
                                <li>• Social Media Templates</li>
                                <li>• Digital & Print Ready Assets</li>
                            </ul>
                        </motion.div>

                        {/* Website Development */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2"
                        >
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Laptop className="h-6 w-6 text-primary" /> Website Development
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Portfolio & Business Websites</li>
                                <li>• CMS / Blogs / Dynamic Web</li>
                                <li>• React, Node, Bootstrap Stack</li>
                                <li>• SEO-Ready & Mobile Responsive</li>
                                <li>• Domain + Hosting + SSL Setup</li>
                            </ul>
                        </motion.div>

                        {/* Video & Motion Graphics */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2"
                        >
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Video className="h-6 w-6 text-primary" /> Video & Motion Graphics
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Logo Reveal Animations</li>
                                <li>• Reels, Ads & Promo Videos</li>
                                <li>• Explainer & Whiteboard Style</li>
                                <li>• Corporate Presentations</li>
                                <li>• 4K Output Quality</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-secondary/20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                            <Banknote className="h-8 w-8 text-primary" /> Pricing Models
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all"
                        >
                            <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                            <h5 className="text-lg font-bold">Starter</h5>
                            <h2 className="text-4xl font-bold my-2">₹10K+</h2>
                            <p className="text-sm text-muted-foreground">Perfect for simple branding or landing pages.</p>
                        </motion.div>

                        {/* Professional */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-card border border-primary/50 rounded-xl p-8 text-center hover:shadow-lg transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg">Popular</div>
                            <Rocket className="h-12 w-12 mx-auto mb-4 text-primary" />
                            <h5 className="text-lg font-bold">Professional</h5>
                            <h2 className="text-4xl font-bold my-2">₹25K+</h2>
                            <p className="text-sm text-muted-foreground">Ideal for expanding businesses with web + media.</p>
                        </motion.div>

                        {/* Custom */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all"
                        >
                            <Gem className="h-12 w-12 mx-auto mb-4 text-green-500" />
                            <h5 className="text-lg font-bold">Custom</h5>
                            <h2 className="text-4xl font-bold my-2">Flexible</h2>
                            <p className="text-sm text-muted-foreground">Built based on requirements, time & complexity.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold flex items-center gap-2">
                            <HelpCircle className="h-8 w-8 text-primary" /> FAQ
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-border rounded-lg p-4"
                        >
                            <h3 className="font-bold flex items-center gap-2 mb-2">
                                <Clock className="h-5 w-5 text-primary" /> How long does a project take?
                            </h3>
                            <p className="text-muted-foreground pl-7">
                                Timeline ranges from 7 to 45 days based on complexity and revisions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="border border-border rounded-lg p-4"
                        >
                            <h3 className="font-bold flex items-center gap-2 mb-2">
                                <ShieldCheck className="h-5 w-5 text-primary" /> Do you provide support?
                            </h3>
                            <p className="text-muted-foreground pl-7">
                                Yes — support, updates & guidance are included based on project type.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary/30 text-center">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let’s turn your ideas into working digital assets.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" /> Contact Me
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
