type Props = {
  title: string;
  description: string;
  tech: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: Props) {
  return (
    <div className="bg-card p-6 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-accent">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-sm text-gray-400 mt-3">{tech}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-sm text-accent hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
