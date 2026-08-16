import {
  CalendarDays,
  ClipboardList,
  Crown,
  Leaf,
} from 'lucide-react';
import { organisasi } from '../data/site';
import { FadeIn } from './FadeIn';
import { SectionLabel } from './SectionLabel';

const icons = {
  clipboard: ClipboardList,
  leaf: Leaf,
  calendar: CalendarDays,
  crown: Crown,
};

export function Organisasi() {
  return (
    <section
      id="organisasi"
      className="scroll-mt-20 bg-page px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Pengalaman Organisasi & Kepanitiaan</SectionLabel>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
            Selain pendidikan formal, aku aktif di organisasi maupun kepanitiaan.
            Di sini aku belajar banyak hal, beberapa diantaranya ada kepemimpinan,
            kerjasama tim, dan mengelola waktu berjejalan dan seefisien mungkin —
            skill yang nggak bakal ditemukan di buku pelajaran.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {organisasi.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.id} delay={i * 0.07}>
                <article className="flex h-full flex-col rounded-2xl bg-surface p-5 shadow-sm transition hover:shadow-md md:p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/15 text-terracotta">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                        <span>{item.year}</span>
                        {item.status && (
                          <span className="rounded-full bg-terracotta/15 px-2 py-0.5 text-[10px] font-medium text-terracotta">
                            {item.status}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg leading-snug text-fg md:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-terracotta">{item.org}</p>
                    </div>
                  </div>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-chip px-2.5 py-1 text-[11px] text-fg-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
