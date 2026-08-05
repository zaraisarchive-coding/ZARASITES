import Image from "next/image";
import { Sparkles, Star, Handshake } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-blush-50 overflow-hidden pt-32 pb-16 px-6 sm:px-10 lg:px-16"
    >
      {/* PORTFOLIO wordmark */}
      <h1 className="font-display italic text-blush-400 leading-none select-none pointer-events-none text-[14vw] sm:text-[11vw] lg:text-[8.5vw] whitespace-nowrap -ml-1">
        PORTFOLIO
      </h1>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end gap-8 mt-4 lg:mt-0 max-w-7xl mx-auto">
        {/* Left: greeting + name */}
        <div className="relative z-10 order-2 lg:order-1">
          <p className="font-display italic text-2xl text-ink-900">
            Hello, I&apos;m
          </p>
          <p className="font-body font-medium text-4xl sm:text-5xl text-ink-900 mt-1">
            Fathimah
          </p>
          <p className="font-body font-medium text-4xl sm:text-5xl text-ink-900">
            Az <span className="highlight-mark">Zahra</span>
          </p>
          <p className="text-blush-500 font-semibold mt-3">
            Junior Web Developer &amp;
            <br />
            UI/UX Designer
          </p>
        </div>

        {/* Center: photo */}
        <div className="relative z-10 order-1 lg:order-2 w-full max-w-md mx-auto">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/profile.jpg"
              alt="Fathimah Az Zahra"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right: info cards */}
        <div className="relative z-10 order-3 flex flex-col gap-3 w-full max-w-xs lg:ml-auto">
          <InfoCard
            icon={<Sparkles className="w-4 h-4" />}
            text="Fokus pengembangan web modern & desain antarmuka"
          />
          <InfoCard
            icon={<Star className="w-4 h-4" />}
            text="Berpengalaman merancang solusi digital"
          />
          <InfoCard
            icon={<Handshake className="w-4 h-4" />}
            text="Berpengalaman merancang solusi digital"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="bg-accent-gold rounded-2xl px-4 py-3.5 flex items-start gap-3">
      <span className="w-7 h-7 rounded-lg bg-navy-900 text-accent-gold flex items-center justify-center shrink-0">
        {icon}
      </span>
      <p className="text-sm font-semibold text-ink-900 leading-snug">
        {text}
      </p>
    </div>
  );
}
