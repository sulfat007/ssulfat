import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, formatDate, blogPosts } from '../data/blog';
import { FadeIn } from '../components/FadeIn';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-page pt-28">
      <div className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
        <FadeIn>
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-terracotta"
          >
            <ArrowLeft size={16} />
            Semua ringkasan
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="rounded-full bg-terracotta/12 px-2.5 py-0.5 text-terracotta">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl leading-tight tracking-tight text-fg md:text-5xl">
            {post.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-[1.85] text-fg-soft md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {related.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="mt-16 pt-10">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted">
                Bacaan lain
              </p>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="block rounded-xl bg-surface p-5 shadow-sm transition hover:shadow-md"
                  >
                    <p className="text-xs text-muted">{formatDate(r.date)}</p>
                    <p className="mt-1 font-serif text-lg text-fg">{r.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </article>
  );
}
