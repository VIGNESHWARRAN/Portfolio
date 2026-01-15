type Item = {
  year: string;
  text: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative max-w-3xl space-y-10">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-800" />

      {items.map((item, i) => (
        <div key={i} className="flex gap-6 relative">
          <span className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1" />
          <div>
            <p className="text-accent text-sm">{item.year}</p>
            <p className="text-gray-300 mt-1">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
