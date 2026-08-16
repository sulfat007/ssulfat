import { useState } from 'react';
import { X } from 'lucide-react';
import { fotografi, site } from '../data/site';
import { FadeIn } from './FadeIn';
import { SectionLabel } from './SectionLabel';

export function Fotografi() {
  const [active, setActive] = useState<(typeof fotografi)[0] | null>(null);

  return (
    <section
      id="fotografi"
      className="scroll-mt-20 bg-page-soft px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Fotografi</SectionLabel>
          <blockquote className="max-w-3xl font-serif text-2xl leading-snug text-fg md:text-3xl lg:text-[2.1rem]">
            "Tidak semua momen dapat terulang, karena sejatinya kenangan hanya
            untuk dikenang bukan diulang."
          </blockquote>
          <div className="mt-6">
            <a
              href={site.socials.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 rounded-full bg-surface px-3.5 py-1.5 text-xs text-fg-soft shadow-sm transition hover:text-terracotta"
            >
              {site.instagramHandle}
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {fotografi.map((item, i) => (
            <FadeIn key={item.id} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl bg-surface md:rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition group-hover:bg-charcoal/15" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-cream"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
