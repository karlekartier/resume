"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";
import { motion } from "motion/react";
import { useVersion } from "@/components/version-provider";

import { Home, User, Briefcase, Mail, Layers } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Services", href: "/services", icon: Layers },
    { name: "Portfolio", href: "/#portfolio", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [isVersionOpen, setIsVersionOpen] = React.useState(false);
    const { version, setVersion } = useVersion();
    const [hovered, setHovered] = React.useState<string | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Image
                        src={`${ASSETS_PREFIX}/assets/favicon/kk_logo.svg`}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <span>KarthickKishore</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                        >
                            {hovered === item.name && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <item.icon className="h-4 w-4" />
                            {item.name}
                        </Link>
                    ))}

                    {/* Version Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setIsVersionOpen(!isVersionOpen)}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {version} <ChevronDown className="h-4 w-4" />
                        </button>

                        {isVersionOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1 overflow-hidden">
                                <button
                                    onClick={() => {
                                        setVersion("v2.1");
                                        setIsVersionOpen(false);
                                    }}
                                    className={cn(
                                        "w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-accent transition-colors",
                                        version === "v2.1" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    v2.1
                                    {version === "v2.1" && <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">Current</span>}
                                </button>
                                <button
                                    onClick={() => {
                                        setVersion("v2.0");
                                        setIsVersionOpen(false);
                                    }}
                                    className={cn(
                                        "w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-accent transition-colors",
                                        version === "v2.0" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    v2.0 (Legacy)
                                    {version === "v2.0" && <span className="text-[10px] bg-muted-foreground text-card px-1.5 py-0.5 rounded-full">Active</span>}
                                </button>
                            </div>
                        )}
                    </div>

                    <ThemeToggle />
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-3 text-muted-foreground hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border/40 bg-background">
                    <div className="container py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors p-3 rounded-md hover:bg-muted"
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
