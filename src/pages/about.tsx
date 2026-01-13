import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-16 max-w-4xl mx-auto text-gray-300">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="mt-6">
          I am an Applied AI & ML Engineer focused on building practical,
          production-oriented machine learning systems. I care about robustness,
          interpretability, and real-world impact more than purely theoretical work.
        </p>
      </main>
      <Footer />
    </>
  );
}
