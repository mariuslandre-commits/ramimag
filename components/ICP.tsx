import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

function readICP(){
  const p = path.join(process.cwd(), 'data', 'icp.yml');
  const raw = fs.readFileSync(p, 'utf8');
  return yaml.parse(raw);
}

export default function ICP(){
  const data = readICP();
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-semibold text-brand-navy">ICP I Serve & Playbooks</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Regions</h3>
          <ul className="mt-2 list-disc pl-5 text-neutral-sub">
            {data.regions.map((r:string)=>(<li key={r}>{r}</li>))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Industries</h3>
          <ul className="mt-2 list-disc pl-5 text-neutral-sub">
            {data.industries.map((r:string)=>(<li key={r}>{r}</li>))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Company Size</h3>
          <p className="text-neutral-sub">Consulting: {data.company_size.consulting_min_employees}+ employees</p>
          <p className="text-neutral-sub">SaaS: {data.company_size.saas_min_employees}+ (Series A+)</p>
        </div>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Stakeholders</h3>
          <ul className="mt-2 list-disc pl-5 text-neutral-sub">
            {data.stakeholders.map((r:string)=>(<li key={r}>{r}</li>))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Pains solved</h3>
          <ul className="mt-2 list-disc pl-5 text-neutral-sub">
            {data.pains_solved.map((r:string)=>(<li key={r}>{r}</li>))}
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-soft">
        <h3 className="font-semibold">Playbooks</h3>
        <ul className="mt-2 grid md:grid-cols-2 gap-2 list-disc pl-5 text-neutral-sub">
          {data.playbooks.map((r:string)=>(<li key={r}>{r}</li>))}
        </ul>
      </div>
    </div>
  );
}
