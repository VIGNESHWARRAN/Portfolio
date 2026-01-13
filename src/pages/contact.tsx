import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-16 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="mt-6 text-gray-300">
          GitHub: github.com/VIGNESHWARRAN <br />
          Email: vigneshwarran0@gmail.com
        </p>
      </main>
      <Footer />
    </>
  );
}
