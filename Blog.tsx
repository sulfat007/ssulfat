import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts, formatDate } from '../data/blog';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...blogPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-page pt-28">
      <div className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <FadeIn>
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-terracotta"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>
          <SectionLabel>Jurnal</SectionLabel>
          <h1 className="font-serif text-4xl tracking-tight text-fg md:text-5xl">
            Semua ringkasan buku
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Catatan dan pelajaran dari buku yang pernah dibaca — diurutkan dari
            yang terbaru.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {sorted.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
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
                  <h2 className="font-serif text-xl text-fg transition group-hover:text-terracotta">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="hidden shrink-0 text-muted transition group-hover:text-terracotta sm:block"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
