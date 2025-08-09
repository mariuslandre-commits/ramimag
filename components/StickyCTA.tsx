'use client';
import { useEffect, useState } from 'react';

export function StickyCTA(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  if(!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <a href="#contact" className="rounded-full bg-brand-orange px-5 py-3 text-sm font-medium text-black shadow-soft">Book a 20‑min intro</a>
    </div>
  );
}
export default StickyCTA;
