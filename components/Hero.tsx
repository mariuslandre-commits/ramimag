import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-b from-brand-navy to-brand-navy-2 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Director of Business Development who scales predictable revenue in services businesses.
          </h1>
          <p className="mt-4 text-brand-light">
            Built GTM from zero to durable growth: 4× revenue, +300% ACV, 50→160 accounts, NPS 70—without burning trust or teams.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact"><Button>Book a 20‑min intro</Button></a>
            <a href="/resume.pdf" className="inline-flex items-center rounded-lg border border-white/30 px-4 py-2">Download Résumé</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/images/headshot.jpg" alt="Headshot of Marius André" width={420} height={520} className="rounded-2xl object-cover aspect-[4/5]" />
        </div>
      </div>

      <section id="pillars" className="mx-auto max-w-6xl px-4 pb-12 grid md:grid-cols-5 gap-4">
        {[
          ['Pipeline, Qualified', 'ICP clarity, intent signals, disciplined MEDDPICC; fewer, better opportunities.'],
          ['Conversion, Defensible', 'Challenger discovery + ROI cases that survive Finance/Legal.'],
          ['Enterprise‑grade GTM', 'Segmentation, CRM hygiene, forecast rigor leaders trust.'],
          ['Team Orchestration', 'Rituals, enablement, EOS—so growth scales with quality.'],
          ['ESG Edge', 'Executive credibility to unlock mid/enterprise mandates.'],
        ].map(([t, d]) => (
          <div key={t as string} className="rounded-xl bg-white/10 p-4 text-sm">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-brand-light mt-1">{d}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
