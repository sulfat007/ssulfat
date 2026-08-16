import { motion } from 'framer-motion';
import { skills } from '../data/site';
import { FadeIn } from './FadeIn';
import { SectionLabel } from './SectionLabel';

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-page px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-serif text-3xl text-fg md:text-4xl">
            Hal-hal yang aku kuasai.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-surface p-6 shadow-sm md:p-8">
            <ul className="space-y-6">
              {skills.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-fg">{s.name}</span>
                    <span className="text-muted">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-track">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-terracotta-deep to-terracotta"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 1.15,
                        delay: 0.12 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
