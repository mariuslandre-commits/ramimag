import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { LogoCloud } from '@/components/LogoCloud';
import { Timeline } from '@/components/Timeline';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { StickyCTA } from '@/components/StickyCTA';
import ICP from '@/components/ICP';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import logos from '@/data/logos.json';
import testimonials from '@/data/testimonials.json';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="logos" className="py-12 sm:py-16">
        <LogoCloud logos={logos as any} />
      </section>
      <section id="metrics" className="py-12 sm:py-16 bg-brand-navy/5">
        <Metrics />
      </section>
      <section id="journey" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-brand-navy">Professional Journey</h2>
          <p className="mt-2 text-neutral-sub">From operational backbone to GTM leadership: EOS, team scale, EVO2030; then owned GTM and delivered durable growth.</p>
          <div className="mt-8">
            <Timeline />
          </div>
          <div className="mt-6">
            <a href="/journey" className="underline text-brand-green">View the full timeline →</a>
          </div>
        </div>
      </section>
      <section id="impact" className="py-12 sm:py-16 bg-brand-navy/5">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-brand-navy">Experience & Impact</h2>
          <p className="mt-2 text-neutral-sub">Selected case studies. Each details the situation, moves, and measurable outcomes.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <CaseStudyCard slug="aero-montreal" title="$2.7M multi-year program with Aero Montréal" summary="MEDDPICC-driven enterprise win; multi-stakeholder alignment; renewal-ready." kpis={["$2.7M signed", "2-year + renewal", "Exec alignment"]} />
            <CaseStudyCard slug="evo2030" title="EVO2030: packaging services to lift ACV" summary="Productized ESG program; shifted from SMB to mid-market with clear pricing tiers." kpis={["ACV 50k→150–200k", "Faster enterprise validation"]} />
            <CaseStudyCard slug="customer-success" title="Customer Success as a revenue engine" summary="Built CS motion; enabled consultants to upsell/cross-sell." kpis={["$500k expansion in one semester", "Higher NPS"]} />
          </div>
        </div>
      </section>
      <section id="icp" className="py-12 sm:py-16">
        <ICP />
      </section>
      <section id="testimonials" className="py-12 sm:py-16 bg-brand-navy/5">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-brand-navy">Testimonials</h2>
          <Testimonials testimonials={testimonials as any} />
        </div>
      </section>
      <section id="beyond" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <Image src="/images/headshot.jpg" alt="Marius André headshot" width={640} height={800} className="rounded-xl object-cover aspect-[4/5]" />
            <h3 className="mt-4 font-semibold text-brand-navy">Beyond the office</h3>
            <p className="text-neutral-sub">Dad of 3 under 3. Rugby & community. Occasional panelist.</p>
          </div>
          <Image src="/images/panel.jpg" alt="Marius André speaking on a panel" width={800} height={450} className="rounded-2xl object-cover shadow-soft" />
          <Image src="/images/team.jpg" alt="Marius with team" width={800} height={450} className="rounded-2xl object-cover shadow-soft" />
        </div>
      </section>
      <section id="contact" className="py-12 sm:py-20 bg-brand-navy text-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold">Let’s talk</h2>
          <p className="mt-2 text-brand-light">Hiring for Director of Business Development? Book a 20‑minute intro or drop a note.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <ContactForm />
            <div className="space-y-3">
              <p>Email: <a className="underline" href="mailto:marius.l.andre@gmail.com">marius.l.andre@gmail.com</a></p>
              <p>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/mariusandre34160" target="_blank" rel="noopener noreferrer">/in/mariusandre34160</a></p>
              <p>Calendly: <em>coming soon</em></p>
              <p className="text-xs opacity-80">We’ll only use your info to respond. CASL/GDPR compliant.</p>
            </div>
          </div>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
