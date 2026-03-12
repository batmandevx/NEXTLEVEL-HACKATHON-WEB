'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.cssText = `left:${mx - 4}px;top:${my - 4}px`;
    };
    document.addEventListener('mousemove', onMove);

    let frame: number;
    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.cssText = `left:${rx - 19}px;top:${ry - 19}px`;
      frame = requestAnimationFrame(loop);
    };
    loop();

    const hoverEls = document.querySelectorAll('a,button,.track,.jc,.aud-card,.prize,.af,.tl-card');
    const add = () => document.body.classList.add('cursor-h');
    const rem = () => document.body.classList.remove('cursor-h');
    hoverEls.forEach(el => { el.addEventListener('mouseenter', add); el.addEventListener('mouseleave', rem); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="dot" />
      <div ref={ringRef} id="ring" />
    </>
  );
}
