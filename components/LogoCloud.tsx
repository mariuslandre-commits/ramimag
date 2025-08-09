import Image from 'next/image';

export function LogoCloud({ logos }: { logos: {src:string; alt:string; width?:number; height?:number;}[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-90">
        {logos.map((l, i) => (
          <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition">
            <Image src={l.src} alt={l.alt} width={l.width || 140} height={l.height || 60} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default LogoCloud;
