import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="px-8 max-w-4xl mx-auto">

        <Section title="Notes & Writing">
          <ul className="space-y-4 text-gray-300">
            <li>• Why probabilistic models still matter</li>
            <li>• Domain generalization as a suppression problem</li>
            <li>• Lessons from building ML systems end-to-end</li>
          </ul>
        </Section>

      </main>
    </>
  );
}
