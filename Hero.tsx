import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { site } from '../data/site';

// Cache-bust filenames so CDN/browser tidak pakai foto lama
const HERO_BG = '/images/hero-bg-v3.jpg?v=3';
const HERO_PORTRAIT = '/images/hero-portrait-v4.jpg?v=4';

export function Hero() {
  const scrollNext = () => {
    document.getElementById('organisasi')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream">
      {/* Background — foto baru user */}
      <div className="absolute inset-0 bg-[#f5f0e8]">
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Fog lembut se-layar, lebih tebal di kiri biar teks kebaca */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background: `
              linear-gradient(
                105deg,
                rgba(243, 235, 227, 0.82) 0%,
                rgba(243, 235, 227, 0.55) 34%,
                rgba(243, 235, 227, 0.32) 62%,
                rgba(243, 235, 227, 0.2) 100%
              )
            `,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              linear-gradient(
                105deg,
                rgba(26, 24, 22, 0.85) 0%,
                rgba(26, 24, 22, 0.6) 34%,
                rgba(26, 24, 22, 0.42) 62%,
                rgba(26, 24, 22, 0.32) 100%
              )
            `,
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-page to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
        <div className="flex flex-1 flex-col justify-center gap-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
              {site.name}
            </h1>
            <p className="mt-5 text-lg font-medium text-terracotta md:text-xl">
              {site.status}
            </p>
            <p className="mt-2 text-base text-muted md:text-lg">
              {site.campus}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:mx-0 lg:mr-4"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.75rem] border border-terracotta/30 sm:-inset-2.5 sm:rounded-[1.9rem]" />
              <div className="relative overflow-hidden rounded-[1.45rem] border-[2.5px] border-cream/90 shadow-[0_28px_55px_-20px_rgba(26,24,22,0.4)] sm:rounded-[1.6rem] dark:border-cream/20">
                <img
                  src={HERO_PORTRAIT}
                  alt={`${site.name} — mahasiswa Teknik Sipil`}
                  className="aspect-[4/5] w-full object-cover object-[center_18%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-muted transition hover:text-fg"
      >
        Scroll
        <ChevronDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
