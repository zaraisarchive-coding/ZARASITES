import { Briefcase } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-white/50">
      <SectionHeading eyebrow="Where I've contributed" title="Experience" />

      <Reveal delay={0.1} className="max-w-4xl mx-auto mt-12">
        <div className="glass rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="font-ui font-semibold text-lg text-ink-900">
              Internal Sponsorship Staff
            </h3>
            <p className="text-sm text-blush-500 font-medium mt-1">
              Dies Natalis SMK Telkom Sidoarjo
            </p>
            <p className="text-ink-700/80 mt-3 leading-relaxed">
              Mengelola administrasi sponsor, mendokumentasikan data sponsor,
              serta membantu koordinasi tim dalam kegiatan Dies Natalis.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
