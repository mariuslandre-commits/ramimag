export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-sub flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Marius André</p>
        <p>Built with Next.js, Tailwind, shadcn/ui, Framer Motion. Colors aligned to coesio.com.</p>
      </div>
    </footer>
  );
}
