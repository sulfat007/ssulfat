import {
  Download,
  Instagram,
  Mail,
  MapPin,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';
import { site } from '../data/site';
import { FadeIn } from './FadeIn';
import { SectionLabel } from './SectionLabel';

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
    </svg>
  );
}

const socialRows = [
  { ...site.socials.instagram, icon: Instagram },
  { ...site.socials.tiktok, icon: TikTokIcon },
  { ...site.socials.youtube, icon: Youtube },
  { ...site.socials.email, icon: Mail },
];

export function Contact() {
  const handleDownloadCV = () => {
    const content = [
      site.name,
      `${site.status}`,
      site.campus,
      site.location,
      '',
      `Email: ${site.email}`,
      `Instagram: ${site.instagramHandle}`,
      '',
      'CV ringkas — update menyusul seiring pengalaman bertambah.',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV-${site.name.replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-page px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionLabel>Kontak</SectionLabel>
            <h2 className="font-serif text-3xl leading-tight text-fg md:text-5xl">
              Yuk ngobrol,
              <br />
              <span className="text-terracotta">collab</span> atau sekedar say hi.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
              Buka buat project fotografi, kolaborasi konten, atau bahkan diskusi
              soal dunia konstruksi. Balasan paling lama 1×24 jam, janji.
            </p>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} className="text-terracotta" />
              {site.location}
            </p>

            <button
              type="button"
              onClick={handleDownloadCV}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-terracotta/90 dark:text-charcoal"
            >
              <Download size={15} />
              Download CV
            </button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {socialRows.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-4 rounded-2xl bg-surface px-4 py-4 shadow-sm transition hover:shadow-md md:px-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chip text-fg-soft transition group-hover:text-terracotta">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm text-fg">{handle}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted transition group-hover:text-terracotta"
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
