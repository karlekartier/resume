import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { SocialLinks } from "@/components/SocialLinks";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-24 pb-12 container">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm mb-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <SocialLinks />
            <ContactInfo />
            <Footer />
        </main>
    );
}
