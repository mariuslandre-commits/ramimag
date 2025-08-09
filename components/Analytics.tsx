'use client';

export function Analytics() {
  // Plausible/GA4 placeholders via env flags
  if (typeof window === 'undefined') return null;
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {plausible && (
        <script
          defer
          data-domain={plausible}
          src="https://plausible.io/js/script.js"
        />
      )}
      {ga && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
        />
      )}
      {ga && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga}');
            `,
          }}
        />
      )}
    </>
  );
}
