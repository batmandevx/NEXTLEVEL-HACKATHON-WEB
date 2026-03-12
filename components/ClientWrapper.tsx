'use client';

import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('./Cursor'), { ssr: false });
const Nav = dynamic(() => import('./Nav'), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <Cursor />
      <Nav />
    </>
  );
}
