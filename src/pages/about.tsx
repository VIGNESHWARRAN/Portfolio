import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-8 max-w-4xl mx-auto">

        <Section title="About Me">
          <p className="text-gray-300 leading-relaxed">
            I am an Applied AI & Machine Learning Engineer with a strong interest
            in building systems that are practical, robust, and grounded in
            real-world constraints. I enjoy structured problem-solving,
            probabilistic thinking, and designing clean, maintainable systems.
          </p>
        </Section>

      </main>
    </>
  );
}
