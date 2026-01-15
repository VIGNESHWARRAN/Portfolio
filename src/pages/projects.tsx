import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/data/config";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        <Section title="Selected Projects">
          <p className="text-text-muted mb-10 max-w-2xl">
            A collection of my work in Agentic AI, Robotics, and Systems Engineering.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.desc}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}