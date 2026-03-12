'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'mount' | 'inView';
  duration?: number;
}

export default function TextScramble({
  text,
  className = '',
  trigger = 'hover',
  duration = 1500,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCounter = useRef(0);
  const isAnimating = useRef(false);
  const textRef = useRef<HTMLSpanElement>(null);

  const scramble = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const length = text.length;
    queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const from = text[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queueRef.current.push({ from, to, start, end });
    }

    frameCounter.current = 0;

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        let char = queueRef.current[i].char;

        if (frameCounter.current >= end) {
          complete++;
          output += to;
        } else if (frameCounter.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queueRef.current[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queueRef.current.length) {
        isAnimating.current = false;
      } else {
        frameCounter.current++;
        frameRef.current = requestAnimationFrame(update);
      }
    };

    update();
  }, [text]);

  useEffect(() => {
    if (trigger === 'mount') {
      scramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, scramble]);

  useEffect(() => {
    if (trigger === 'inView') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            scramble();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      if (textRef.current) observer.observe(textRef.current);

      return () => observer.disconnect();
    }
  }, [trigger, scramble]);

  return (
    <span
      ref={textRef}
      className={`scramble-text ${className}`}
      onMouseEnter={trigger === 'hover' ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
