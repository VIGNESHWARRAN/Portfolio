import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AIML() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">Applied AI & ML</h2>

        <ul className="mt-8 space-y-4 text-gray-300">
          <li>• Sequence modeling (Markov, Mamba, Transformers)</li>
          <li>• Probabilistic models & Bayesian inference</li>
          <li>• Time-series forecasting & anomaly detection</li>
          <li>• Domain generalization & robustness</li>
          <li>• ML systems & deployment awareness</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
