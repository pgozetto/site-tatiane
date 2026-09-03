'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
}

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = '|',
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const currentWord = words[wordIndex] ?? '';

  useEffect(() => {
    if (!words.length) return;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
      }
    }, charIndex === currentWord.length && !isDeleting ? delayBetweenWords : isDeleting ? speed / 2 : speed);

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentWord, delayBetweenWords, isDeleting, speed, words.length]);

  useEffect(() => {
    if (!cursor) return;
    const interval = window.setInterval(() => setShowCursor((previous) => !previous), 500);
    return () => window.clearInterval(interval);
  }, [cursor]);

  return (
    <span className="inline-block" aria-live="polite">
      {displayText}
      {cursor && <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>{cursorChar}</span>}
    </span>
  );
}
