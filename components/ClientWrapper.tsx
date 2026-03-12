'use client';

import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('./Cursor'), { ssr: false });
const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false });
const Nav = dynamic(() => import('./Nav'), { ssr: false });
const FloatingOrbs = dynamic(() => import('./FloatingOrbs'), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <Cursor />
      <ParticleField />
      <FloatingOrbs />
      <Nav />
    </>
  );
}
