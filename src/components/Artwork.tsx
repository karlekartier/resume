"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

const slides = [
    {
        id: 0,
        title: "Adobe Illustrator",
        icon: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/illustrator.svg`,
        description: "Crafting detailed vector illustrations with precision, layer by layer.",
        details: "From structured layouts to fine-tuned elements, I ensure crisp, high-resolution designs with pixel-perfect clarity. Each artwork is carefully built, maintaining depth, balance, & scalability for any creative requirement.",
        background: `${ASSETS_PREFIX}/assets/images/forestnight.webp`,
    },
    {
        id: 1,
        title: "Color Palette Expertise",
        icon: `${ASSETS_PREFIX}/assets/images/icons/canva.svg`,
        description: "Elevating designs with an intuitive approach, leveraging & millions of color palettes.",
        details: "A special appreciation for its effortless blending of creativity & accessibility, allowing me to craft visually stunning marketing materials, presentations, & social media content with ease.",
        background: `${ASSETS_PREFIX}/assets/images/forestdark.webp`,
    },
];

export function Artwork() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const containerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section ref={containerRef} id="artwork" className="relative py-20 min-h-[600px] overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={slides[currentSlide].background}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ y }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentSlide].background}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h2 className="text-4xl font-bold mb-6">ArtWork & Design</h2>
                        <p className="text-lg text-white/80 mb-8">
                            With the perfect synergy of <strong>technical precision in Illustrator & artistic flexibility in Canva,</strong> I bring concepts to life with compelling visuals & a keen eye for design aesthetics.
                        </p>
                        <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors font-medium">
                            Check My Gallery
                        </button>
                    </div>

                    {/* Slider Card */}
                    <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border dark:border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                {slides.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        className={cn(
                                            "w-2 h-2 rounded-full transition-all",
                                            currentSlide === index ? "bg-primary w-6" : "bg-muted"
                                        )}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={slides[currentSlide].icon}
                                        alt={slides[currentSlide].title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 mb-6"
                                    />
                                    <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                                    <p className="text-sm text-muted-foreground border-b pb-4 mb-4">
                                        {slides[currentSlide].description}
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        {slides[currentSlide].details}
                                    </p>
                                    <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                                        View Artwork
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
