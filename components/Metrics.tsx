export function Metrics() {
  const metrics = [
    ['4×', 'Revenue growth'],
    ['+46%', 'YoY growth'],
    ['+300%', 'Avg. deal size (ACV)'],
    ['50→160', 'Active B2B accounts'],
    ['5%→15%', 'Outbound→SQL conversion'],
    ['25%→50%', 'SQL→Win rate'],
    ['70', 'NPS'],
  ];
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-white p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-brand-navy">{k}</div>
            <div className="text-sm text-neutral-sub">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
