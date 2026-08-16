import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts, formatDate } from '../data/blog';
import { FadeIn } from './FadeIn';
import { SectionLabel } from './SectionLabel';

export function BlogPreview() {
  const latest = [...blogPosts]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <section
      id="jurnal"
      className="scroll-mt-20 bg-page-soft px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>Jurnal</SectionLabel>
          <h2 className="font-serif text-3xl text-fg md:text-4xl">
            Ringkasan buku yang pernah ku baca.
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {latest.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-sm transition hover:shadow-md md:p-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                    <span className="rounded-full bg-terracotta/12 px-2.5 py-0.5 text-terracotta">
                      {post.category}
                    </span>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg text-fg transition group-hover:text-terracotta md:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-chip text-muted transition group-hover:text-terracotta sm:flex">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm text-fg-soft shadow-sm transition hover:text-terracotta"
            >
              Lihat semua ringkasan
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
