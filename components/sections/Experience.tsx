import { Briefcase, Trophy, Palette, Code2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const EXPERIENCES = [
  {
    icon: Briefcase,
    title: "Internal Sponsorship Staff",
    org: "Dies Natalis SMK Telkom Sidoarjo",
    desc: "Mengelola administrasi sponsor, mendokumentasikan data sponsor, serta membantu koordinasi tim dalam kegiatan Dies Natalis.",
  },
  {
    icon: Code2,
    title: "Front-End Developer & UI/UX Designer",
    org: "PAMA Studio",
    desc: "Merancang desain UI/UX dan mengembangkan tampilan website menggunakan Next.js, TypeScript, Tailwind, dan Supabase.",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    org: "SkyGuard AI",
    desc: "Merancang tampilan dan pengalaman pengguna untuk website SkyGuard AI menggunakan Figma.",
  },
  {
    icon: Trophy,
    title: "Juara 3 BMC COMPFEST-UI",
    org: "COMPFEST",
    desc: "Meraih juara 3 pada Business Mini Case COMPFEST melalui perancangan solusi UI/UX.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white/50">
      <SectionHeading
        eyebrow="Where I've contributed"
        title="Experience"
        align="center"
      />

      <div className="max-w-4xl mx-auto mt-12 flex flex-col gap-6">
        {EXPERIENCES.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="glass rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                <e.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-ui font-semibold text-lg text-ink-900">
                  {e.title}
                </h3>
                <p className="text-sm text-blush-500 font-medium mt-1">
                  {e.org}
                </p>
                <p className="text-ink-700/80 mt-3 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}