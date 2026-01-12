import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">
          Applied AI & ML Engineer
        </h1>

        <p className="mt-6 text-gray-300">
          I build intelligent systems that work under real-world constraints —
          combining machine learning, probabilistic reasoning, and engineering.
        </p>

        <div className="mt-10 space-x-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-accent text-black rounded-lg"
          >
            View Projects
          </a>

          <a
            href="https://github.com/VIGNESHWARRAN"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
