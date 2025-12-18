import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Toolkit } from "@/components/Toolkit";
import { SkillsOverview } from "@/components/SkillsOverview";
import { Projects } from "@/components/Projects";
import { DetailedSkills } from "@/components/DetailedSkills";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="bg-muted/30">
        <About />
      </div>
      <Toolkit />
      <div className="bg-muted/30">
        <SkillsOverview />
      </div>
      <Projects />
      <div className="bg-muted/30">
        <DetailedSkills />
      </div>
      <ContactInfo />
      <Footer />
    </main>
  );
}
