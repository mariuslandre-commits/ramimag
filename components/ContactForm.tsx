'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function ContactForm(){
  const [status, setStatus] = useState<'idle'|'ok'|'error'|'loading'>('idle');

  async function submit(e:React.FormEvent){
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
      const json = await res.json();
      setStatus(json.ok ? 'ok' : 'error');
      if(json.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3" aria-labelledby="contact-heading">
      <input type="text" name="company" className="hidden" aria-hidden="true" tabIndex={-1} /> {/* honeypot */}
      <Input name="name" placeholder="Your name" required aria-label="Your name" />
      <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
      <Textarea name="message" placeholder="How can I help?" required aria-label="Message" />
      <Button type="submit" disabled={status==='loading'}>{status==='loading'?'Sending…':'Send'}</Button>
      {status==='ok' && <p role="status" className="text-sm text-brand-light">Thanks! I’ll reply shortly.</p>}
      {status==='error' && <p role="alert" className="text-sm text-red-600">Something went wrong. Try again.</p>}
    </form>
  );
}
