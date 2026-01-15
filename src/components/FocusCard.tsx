import { motion } from "framer-motion";

type Props = {
  title: string;
  points: string[];
};

export default function FocusCard({ title, points }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-card border border-gray-800 rounded-2xl p-6 hover:border-accent/40"
    >
      <h3 className="text-lg font-medium text-accent mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </motion.div>
  );
}
