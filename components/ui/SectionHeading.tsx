import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-ui font-semibold text-3xl sm:text-4xl text-ink-900 mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-ink-700/80 mt-4 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
