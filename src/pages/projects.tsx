import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Markov Mamba Domain Generalization"
          description="Robust sequence modeling under domain shift using suppressed hidden states."
          tech="PyTorch · Probabilistic Models"
          link="https://github.com/VIGNESHWARRAN/Markov_Mamba_Domain_Generalization"
        />

        <ProjectCard
          title="Online Judge Platform"
          description="Secure code evaluation platform with role-based access control."
          tech="TypeScript · Systems Engineering"
          link="https://github.com/VIGNESHWARRAN"
        />
      </main>
      <Footer />
    </>
  );
}
