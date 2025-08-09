export function Timeline() {
  const items = [
    {
      title: 'COESIO — Partner, Business Development',
      desc: 'Owned GTM: ICP clarity, outbound orchestration, MEDDPICC; 4× revenue, +300% ACV, 50→160 accounts; NPS 70.',
      color: 'bg-brand-green',
    },
    {
      title: 'Operational Backbone',
      desc: 'Implemented EOS, scaled team 6→17, co‑created EVO2030 program; enablement & rituals.',
      color: 'bg-brand-orange',
    },
  ];
  return (
    <ol className="relative border-l-2 border-brand-light/60 pl-6 space-y-10">
      {items.map((it, idx) => (
        <li key={idx} className="relative">
          <div className={`absolute -left-3 h-6 w-6 rounded-full ${it.color}`} />
          <h3 className="font-semibold text-brand-navy">{it.title}</h3>
          <p className="text-neutral-sub">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}
