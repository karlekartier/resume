"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/utils/cn";

const faqs = [
    {
        question: "What services do you offer?",
        answer: (
            <>
                <p>I specialize in Digital Marketing, Web Design, UI/UX Development, & Motion Graphics.</p>
                <p className="mb-0">From building SEO-friendly websites to creating engaging designs and brand campaigns, I help businesses strengthen their online presence.</p>
            </>
        ),
    },
    {
        question: "Can you design and market a complete website for my business?",
        answer: "Yes! I can handle end-to-end — from UI/UX design, development, SEO optimization, & social media marketing — to ensure your website not only looks great but also performs well in search engines.",
    },
    {
        question: "Do you provide freelance or full-time services?",
        answer: "I am open to both freelance projects & full-time opportunities. Let's connect & discuss how I can bring value to your project or organization.",
    },
    {
        question: "What tools and platforms do you work with?",
        answer: "I work with All Adobe Creative Suite, Canva, SEO tools, Google Ads, Meta Ads, & front-end technologies like HTML, CSS, & JavaScript.",
    },
    {
        question: "How do I get in touch with you for collaborations?",
        answer: (
            <>
                <p>You can reach me directly via the contact form below, or email me at:</p>
                <p>
                    <a href="mailto:karthickkishoreking@gmail.com" className="text-primary hover:underline">
                        karthickkishoreking
                    </a>
                </p>
                <p className="mb-0">I'll respond as soon as possible.</p>
            </>
        ),
    },
    {
        question: "Where can I see your past work?",
        answer: (
            <>
                <p>
                    You can explore my portfolio here{" "}
                    <a href="/" className="text-primary hover:underline">
                        karthick-kishore
                    </a>
                </p>
                <p className="mb-0">for samples of my design, motion graphics, and marketing projects.</p>
            </>
        ),
    },
];

export function Faq() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Side */}
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl font-bold mb-4">
                            Any questions? <br className="hidden md:inline" />
                            Check out the FAQs
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Still have unanswered questions & need to get in touch?
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
                                <Phone className="w-8 h-8 text-primary mb-3 mx-auto sm:mx-0" />
                                <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
                                <a href="tel:+917358198244" className="text-primary font-medium hover:underline flex items-center justify-center sm:justify-start gap-2">
                                    Call us <ChevronDown className="w-4 h-4 -rotate-90" />
                                </a>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
                                <MessageSquare className="w-8 h-8 text-green-500 mb-3 mx-auto sm:mx-0" />
                                <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
                                <a href="https://wa.me/qr/GTP2HAM2XOBJF1" className="text-green-500 font-medium hover:underline flex items-center justify-center sm:justify-start gap-2">
                                    Chat with us <ChevronDown className="w-4 h-4 -rotate-90" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border rounded-xl bg-card overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-6 text-left font-medium transition-colors hover:bg-muted/50"
                                    >
                                        {faq.question}
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 text-muted-foreground transition-transform duration-200",
                                                openIndex === index && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
