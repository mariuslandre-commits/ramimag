import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Working With Me - Marius André',
  description: 'User guide to collaborating with me effectively.'
};

export default function WorkingWithMePage() {
  return (
    <main className="container py-16 prose">
      <h1>Working With Me</h1>
      <p>This is my professional user guide — how to get the best from me and how I operate in high-performance environments.</p>
      <h2>What You Can Expect</h2>
      <ul>
        <li>Direct, transparent communication — I address risks early.</li>
        <li>Clear priorities and a bias for action.</li>
        <li>Collaborative but decisive in closing cycles.</li>
        <li>Comfortable challenging assumptions to drive better outcomes.</li>
      </ul>
      <h2>How I Work Best</h2>
      <ul>
        <li>Access to metrics and context — I thrive on complete information.</li>
        <li>Mutual clarity on ICP, success metrics, and timelines.</li>
        <li>Trust to execute without micromanagement.</li>
      </ul>
      <p className="text-muted">[TODO: Integrate anecdotes and specific examples from prior roles.]</p>
    </main>
  );
}
