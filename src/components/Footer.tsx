import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Send } from "lucide-react";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";
import { GridBackground } from "@/components/ui/grid-background";

export function Footer() {
    return (
        <footer className="relative bg-background border-t border-border">
            <div className="absolute inset-0 z-0">
                <GridBackground gridSize="6:6" />
            </div>

            <div className="container relative z-10 pt-16 pb-8">
                <div className="grid lg:grid-cols-12 gap-12 mb-12">
                    {/* Brand & Subscribe */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-4 mb-6">
                            <Image src={`${ASSETS_PREFIX}/assets/favicon/kk_logo.svg`} alt="Logo" width={40} height={40} className="w-10 h-10" />
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-lg">karthick-kishore</span>
                                <div className="h-8 w-px bg-border" />
                                <span className="font-semibold text-muted-foreground">2025</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Connect with me to create something innovative & result-driven. Together, we can turn creativity into reality! <strong>Let&apos;s make it happen!</strong>
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full h-12 pl-12 pr-32 rounded-lg border bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 px-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-8 lg:pl-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Useful Links */}
                            <div>
                                <h6 className="font-bold mb-4">Useful Links</h6>
                                <ul className="space-y-3">
                                    <li><Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                                    <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                                    <li><Link href="/#works" className="text-muted-foreground hover:text-primary transition-colors">My Works</Link></li>
                                    <li><Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                                    <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                                </ul>
                            </div>

                            {/* Socials */}
                            <div>
                                <h6 className="font-bold mb-4">Socials</h6>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="https://www.facebook.com/share/18ftrrvcVq/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Facebook className="w-4 h-4" /> Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/qr/GTP2HAM2XOBJF1" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Phone className="w-4 h-4" /> Whatsapp
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/karlekartier?igsh=MXgyOTZwOWYxMjNoaw==" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Instagram className="w-4 h-4" /> Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/karthick-kishore-b48985208/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Linkedin className="w-4 h-4" /> LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/karthickkisking" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Twitter className="w-4 h-4" /> X
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Me */}
                            <div>
                                <h6 className="font-bold mb-4">Contact Me</h6>
                                <div className="space-y-3">
                                    <a href="mailto:karthickkishoreking@gmail.com" className="block font-medium hover:text-primary transition-colors">
                                        KarthickKishoreking
                                    </a>
                                    <a href="tel:+917358198244" className="block font-medium hover:text-primary transition-colors">
                                        735-8198-244
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Centered Icons */}
                <div className="pt-8 border-t border-border/50 flex flex-col items-center gap-6">
                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/share/18ftrrvcVq/" className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/karlekartier?igsh=MXgyOTZwOWYxMjNoaw==" className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/karthickkisking" className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/karthick-kishore-b48985208/" className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} All rights reserved. Made by <a href="#" className="text-foreground font-medium hover:text-primary">karthick-kishore</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
