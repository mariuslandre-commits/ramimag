export function jsonLdPerson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marius André',
    jobTitle: 'Director of Business Development',
    url: 'https://mariusandre.dev',
    sameAs: [
      'https://www.linkedin.com/in/mariusandre34160'
    ]
  };
}
