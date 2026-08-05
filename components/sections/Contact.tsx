import { Mail, Linkedin, Github, Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "fathimah@email.com",
    href: "mailto:fathimah@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fathimahazzahra",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fathimahazzahra",
    href: "#",
  },
  {
    icon: Download,
    label: "Download CV",
    value: "CV_FathimahAzZahra.pdf",
    href: "/CV_FathimahAzZahra.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Let's talk"
        title={"Get in touch"}
        description="Terbuka untuk kesempatan internship dan kolaborasi proyek. Silakan hubungi lewat salah satu kanal berikut."
        align="center"
      />

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5 mt-14">
        {CONTACTS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              download={"download" in c ? c.download : undefined}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 glass rounded-2xl p-5 hover:bg-white/90 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                <c.icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-ink-700/60">{c.label}</p>
                <p className="font-ui font-medium text-ink-900 text-sm">
                  {c.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-navy-900 hover:bg-accent-blue transition-colors text-white font-ui font-medium px-8 py-3.5"
        >
          Contact Me
        </a>
      </Reveal>
    </section>
  );
}
