"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2, XCircle, Bell } from "lucide-react";
import { cn } from "@/utils/cn";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/base-alert-dialog";

export function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState<{
        title: string;
        description: string;
        type: "success" | "error";
    }>({ title: "", description: "", type: "success" });
    const [showSlowMessage, setShowSlowMessage] = React.useState(false);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isLoading) {
            timer = setTimeout(() => setShowSlowMessage(true), 5000);
        } else {
            setShowSlowMessage(false);
        }
        return () => clearTimeout(timer);
    }, [isLoading]);

    const hasWarmedUp = React.useRef(false);

    // Backend is now local Next.js API (Serverless), no warm-up needed.
    const warmUpBackend = () => { };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setDialogOpen(false);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok && result.success) {
                setDialogContent({
                    title: "Message Sent!",
                    description: "Thank you for reaching out. I'll get back to you as soon as possible.",
                    type: "success",
                });
                setDialogOpen(true);
                (event.target as HTMLFormElement).reset();
            } else {
                setDialogContent({
                    title: "Failed to Send",
                    description: result.message || "Failed to send message. Please try again.",
                    type: "error",
                });
                setDialogOpen(true);
            }
        } catch (error) {
            setDialogContent({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                type: "error",
            });
            setDialogOpen(true);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6" onMouseEnter={warmUpBackend} onFocus={warmUpBackend}>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    placeholder="How can I help you?"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 w-full sm:w-auto",
                    isLoading && "opacity-70 cursor-not-allowed"
                )}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </button>



            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent showDismissButton={true}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={cn("flex items-center gap-2", dialogContent.type === "success" ? "text-green-600" : "text-red-600")}>
                            {dialogContent.type === "success" ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                            {dialogContent.title}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            {dialogContent.description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </form>
    );
}
