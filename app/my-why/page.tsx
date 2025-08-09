import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'My Why - Marius André',
  description: 'The purpose and motivation behind my career in business development.'
};

export default function MyWhyPage() {
  return (
    <main className="container py-16 prose">
      <h1>My Why</h1>
      <p>My driving purpose is to help organizations unlock transformative growth through strategic go-to-market execution.
         I believe that business development is not just about closing deals, but about aligning the right problems with the right solutions
         to create lasting enterprise value.</p>
      <p>I am motivated by building long-term partnerships, challenging conventional thinking, and delivering measurable impact
         across revenue, market positioning, and team capability.</p>
      <p className="text-muted">[TODO: Personal story or defining moment that shaped this purpose.]</p>
    </main>
  );
}
