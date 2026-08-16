import { Link } from 'react-router-dom';
import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="bg-page px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Link to="/" className="font-serif text-fg">
          {site.shortName}
          <span className="text-terracotta">.</span>
        </Link>
        <p className="text-sm text-muted">
          Dibuat dengan ☕ & kopi di Semarang
        </p>
        <p className="text-sm text-muted">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
