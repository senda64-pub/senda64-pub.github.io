type Props = {
  title: string;
  desc: string;
  url: string;
  thumbnail: string;
};

export default function WorkCard({ title, desc, url, thumbnail }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
        block p-4 rounded-2xl bg-white border border-[var(--color-brand-green)]/20
        shadow-sm hover:shadow-lg
        hover:-translate-y-1 transition-all
      "
    >
      <img
        src={thumbnail}
        alt={title}
        className="
          w-full h-48 object-cover rounded-xl
          shadow-sm mb-4
        "
      />

      <h2 className="text-xl font-medium text-[var(--color-brand-green)]">
        {title}
      </h2>

      <p className="text-gray-600 mt-2">
        {desc}
      </p>
    </a>
  );
}
