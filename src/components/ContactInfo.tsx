"use client";

import * as React from "react";
import { MessageSquare, HelpCircle, Globe, ArrowRight } from "lucide-react";

const items = [
    {
        icon: MessageSquare,
        title: "Chat Help",
        description: "Instant assistance with real-time responses for seamless user experience.",
        linkText: "Talk to me",
        href: "#",
    },
    {
        icon: HelpCircle,
        title: "FAQ",
        description: "Quick answers to common queries, ensuring clarity and easy navigation.",
        linkText: "Learn more",
        href: "#",
    },
    {
        icon: Globe,
        title: "Social links",
        description: "Stay connected across platforms with direct access to social media links.",
        linkText: "Drop us a line",
        href: "/contact",
    },
];

export function ContactInfo() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                                    <item.icon className="w-6 h-6 text-primary-foreground" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground mb-3 leading-relaxed">
                                    {item.description}
                                </p>
                                <a
                                    href={item.href}
                                    className="inline-flex items-center text-primary font-medium hover:underline"
                                >
                                    {item.linkText}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
