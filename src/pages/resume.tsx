import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="px-8 max-w-4xl mx-auto">

        <Section title="Resume">
          <p className="text-gray-300 mb-6">
            Download my resume for a concise overview of my skills,
            experience, and projects.
          </p>

          <a
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-accent text-black rounded-lg"
          >
            Download Resume
          </a>
        </Section>

      </main>
    </>
  );
}
