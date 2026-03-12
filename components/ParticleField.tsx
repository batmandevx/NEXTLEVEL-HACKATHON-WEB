'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    R.setSize(innerWidth, innerHeight);

    const Sc = new THREE.Scene();
    const Ca = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 1000);
    Ca.position.z = 30;

    const N = 2600;
    const G = new THREE.BufferGeometry();
    const P = new Float32Array(N * 3);
    const C = new Float32Array(N * 3);
    const V = new Float32Array(N * 3);

    const palette = [
      new THREE.Color(0x00e8d6), new THREE.Color(0x00e8d6), new THREE.Color(0x00e8d6),
      new THREE.Color(0x9b6dff), new THREE.Color(0xffb547), new THREE.Color(0x00e5a0),
      new THREE.Color(0xff5f57),
    ];

    for (let i = 0; i < N; i++) {
      P[i*3]   = (Math.random()-.5)*130;
      P[i*3+1] = (Math.random()-.5)*80;
      P[i*3+2] = (Math.random()-.5)*60;
      V[i*3]   = (Math.random()-.5)*.004;
      V[i*3+1] = (Math.random()-.5)*.004;
      V[i*3+2] = (Math.random()-.5)*.003;
      const cl = palette[Math.floor(Math.random()*palette.length)];
      C[i*3]=cl.r; C[i*3+1]=cl.g; C[i*3+2]=cl.b;
    }

    G.setAttribute('position', new THREE.BufferAttribute(P, 3));
    G.setAttribute('color',    new THREE.BufferAttribute(C, 3));

    const pts = new THREE.Points(G, new THREE.PointsMaterial({
      size: 0.13, vertexColors: true, transparent: true, opacity: 0.4, sizeAttenuation: true,
    }));
    Sc.add(pts);

    let moX = 0, moY = 0;
    const onMove = (e: MouseEvent) => {
      moX = (e.clientX / innerWidth  - 0.5) * 0.4;
      moY = (e.clientY / innerHeight - 0.5) * 0.3;
    };
    document.addEventListener('mousemove', onMove);

    let animId: number;
    const anim = () => {
      animId = requestAnimationFrame(anim);
      const p = G.attributes.position.array as Float32Array;
      for (let i = 0; i < N; i++) {
        p[i*3]  += V[i*3];   p[i*3+1] += V[i*3+1]; p[i*3+2] += V[i*3+2];
        if (Math.abs(p[i*3])  > 65) V[i*3]   *= -1;
        if (Math.abs(p[i*3+1])>40)  V[i*3+1] *= -1;
        if (Math.abs(p[i*3+2])>30)  V[i*3+2] *= -1;
      }
      G.attributes.position.needsUpdate = true;
      pts.rotation.y += 0.00022; pts.rotation.x += 0.00007;
      Ca.position.x += (moX*5 - Ca.position.x) * 0.024;
      Ca.position.y += (-moY*3 - Ca.position.y) * 0.024;
      Ca.lookAt(Sc.position);
      R.render(Sc, Ca);
    };
    anim();

    const onResize = () => {
      R.setSize(innerWidth, innerHeight);
      Ca.aspect = innerWidth / innerHeight;
      Ca.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      R.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="cv" />;
}
