import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { site } from '../data/site';

const navLinks = [
  { href: '/#organisasi', label: 'Organisasi' },
  { href: '/#fotografi', label: 'Fotografi' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#jurnal', label: 'Jurnal' },
  { href: '/#kontak', label: 'Kontak' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Default cerah; dark hanya kalau user pernah pilih
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    if (stored !== 'dark' && stored !== 'light') {
      localStorage.setItem('theme', 'light');
    }
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-nav-bg/70 backdrop-blur-[6px]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="font-serif text-[1.35rem] tracking-tight text-nav transition-colors"
        >
          {site.shortName}
          <span className="text-terracotta">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              className="text-[13px] text-nav-muted transition hover:text-nav"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Mode cerah' : 'Mode gelap'}
            className="rounded-full p-1.5 text-nav-muted transition hover:text-nav"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Mode cerah' : 'Mode gelap'}
            className="rounded-full p-2 text-nav-muted"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-full p-2 text-nav"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="bg-nav-bg/80 px-5 py-5 backdrop-blur-[6px] md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNav(link.href)}
                className="text-base text-nav"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
