import Reveal from "./Reveal";

type Props = {
  title: string;
  children: React.ReactNode;
  subtle?: boolean;
};

export default function Section({ title, children, subtle }: Props) {
  return (
    <section
      className={`py-28 ${
        subtle ? "bg-card/40 border-y border-gray-800" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <h2 className="text-3xl font-medium mb-12 tracking-tight">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}
