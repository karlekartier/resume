import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/share/18ftrrvcVq/",
        color: "hover:text-blue-600",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/karlekartier?igsh=MXgyOTZwOWYxMjNoaw==",
        color: "hover:text-pink-600",
    },
    {
        name: "Twitter",
        icon: ({ className }: { className?: string }) => (
            <FontAwesomeIcon icon={faXTwitter} className={className} />
        ),
        href: "https://x.com/karthickkisking",
        color: "hover:text-sky-500",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/karthick-kishore-b48985208/",
        color: "hover:text-blue-700",
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/karlekartier",
        color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
        name: "Behance",
        icon: ({ className }: { className?: string }) => (
            <FontAwesomeIcon icon={faBehance} className={className} />
        ),
        href: "https://www.behance.net/karlekarthier",
        color: "hover:text-blue-500",
    },
];

export function SocialLinks() {
    return (
        <section className="py-12 bg-background">
            <div className="container">
                <h2 className="text-2xl font-bold text-center mb-8">Connect on Social Media</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 w-32"
                        >
                            <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors ${social.color}`}>
                                <social.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                            </div>
                            <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
