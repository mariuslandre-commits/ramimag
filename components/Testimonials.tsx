export function Testimonials({ testimonials }:{ testimonials:{quote:string; author:string; role?:string; company?:string;}[] }){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((t,i)=>(
        <figure key={i} className="rounded-2xl bg-white p-6 shadow-soft">
          <blockquote className="text-brand-navy">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-neutral-sub">— {t.author}{t.role ? `, ${t.role}`:''}{t.company ? ` · ${t.company}`:''}</figcaption>
        </figure>
      ))}
    </div>
  );
}
