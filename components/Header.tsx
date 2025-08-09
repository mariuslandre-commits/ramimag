'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 ${scrolled ? 'shadow' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#hero" className="font-semibold text-brand-navy">Marius André</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {[['What I bring', '#pillars'], ['Logos', '#logos'], ['Metrics', '#metrics'], ['Journey', '#journey'], ['Impact', '#impact'], ['ICP', '#icp'], ['Testimonials', '#testimonials'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} className="text-neutral-sub hover:text-brand-navy">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
