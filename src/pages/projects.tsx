import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="px-8 max-w-6xl mx-auto">

        <Section title="Selected Projects">
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Markov Mamba – Robust Sequence Modeling"
              description="Designed a sequence modeling framework resilient to domain shift using probabilistic transitions and hidden-state suppression."
              tech="PyTorch · Probabilistic Models · Time-Series"
              link="https://github.com/VIGNESHWARRAN/Markov_Mamba_Domain_Generalization"
            />

            <ProjectCard
              title="Online Judge Platform"
              description="Built a secure coding evaluation platform with authentication, role-based access, and backend execution logic."
              tech="TypeScript · Node.js · Systems Engineering"
              link="https://github.com/VIGNESHWARRAN"
            />
          </div>
        </Section>

      </main>
    </>
  );
}
