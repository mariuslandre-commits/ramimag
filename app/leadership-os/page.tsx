import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Leadership OS - Marius André',
  description: 'How I lead and deliver results as a Director of Business Development.'
};

export default function LeadershipOSPage() {
  return (
    <main className="container py-16 prose">
      <h1>Leadership OS</h1>
      <p>This section outlines my operating principles, leadership style, and decision-making framework.
         It is based on my professional experience, values, and consistent application of MEDDPICC and SPICED frameworks.</p>
      <h2>Core Principles</h2>
      <ul>
        <li><strong>Accountability:</strong> I own outcomes and drive clarity.</li>
        <li><strong>Transparency:</strong> Data-driven communication with all stakeholders.</li>
        <li><strong>Execution:</strong> Relentless focus on impactful actions over noise.</li>
        <li><strong>Authenticity:</strong> Build trust by being direct and consistent.</li>
      </ul>
      <p className="text-muted">[TODO: Expand with User Guide insights and real-world examples.]</p>
    </main>
  );
}
