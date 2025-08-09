export const metadata = {
  title: 'Professional Journey',
  description: 'Concise timeline of roles and impact; link to résumé PDF.',
};

export default function Journey() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-semibold text-brand-navy">Professional Journey</h1>
      <p className="mt-2 text-neutral-sub">From operational backbone (EOS, team scale) to GTM leadership (4× revenue, +300% ACV).</p>
      <ol className="mt-10 relative border-l-2 border-brand-light/60 pl-6 space-y-10">
        <li>
          <div className="absolute -left-3 h-6 w-6 rounded-full bg-brand-green" />
          <h3 className="font-semibold text-brand-navy">COESIO — Partner, Business Development</h3>
          <p className="text-neutral-sub">Built the GTM engine: ICP clarity, outbound orchestration, MEDDPICC; 4× revenue, +300% ACV, 50→160 accounts; NPS 70.</p>
        </li>
        <li>
          <div className="absolute -left-3 h-6 w-6 rounded-full bg-brand-orange" />
          <h3 className="font-semibold text-brand-navy">Operational Backbone</h3>
          <p className="text-neutral-sub">Implemented EOS, scaled team 6→17, co‑created EVO2030 program, enablement & rituals.</p>
        </li>
      </ol>
      <div className="mt-10">
        <a href="/resume.pdf" className="inline-flex items-center rounded-lg bg-brand-navy px-5 py-3 text-white shadow-soft hover:bg-brand-navy/90">Download Résumé (PDF)</a>
      </div>
    </div>
  );
}
