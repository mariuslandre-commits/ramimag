import Link from 'next/link';

export default function CaseStudyCard({ slug, title, summary, kpis }:{ slug:string; title:string; summary:string; kpis:string[] }){
  return (
    <Link href={`/case-studies/${slug}`} className="block rounded-2xl bg-white p-6 shadow-soft hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-1 text-neutral-sub text-sm">{summary}</p>
      <ul className="mt-3 text-sm text-brand-navy/80 list-disc pl-5 space-y-1">
        {kpis.map((k)=> <li key={k}>{k}</li>)}
      </ul>
      <span className="mt-3 inline-block text-brand-green">Read case →</span>
    </Link>
  );
}
