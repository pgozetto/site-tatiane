'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxScrolling() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 800px), (prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const animateLenis = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', updateScrollTrigger);
    gsap.ticker.add(animateLenis);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>('[data-parallax-section="hero"]');
      const heroCopy = document.querySelector<HTMLElement>('[data-parallax-hero-copy]');
      const heroOrbOne = document.querySelector<HTMLElement>('[data-parallax-hero-orb-one]');
      const heroOrbTwo = document.querySelector<HTMLElement>('[data-parallax-hero-orb-two]');
      const about = document.querySelector<HTMLElement>('[data-parallax-section="about"]');
      const aboutLabel = document.querySelector<HTMLElement>('[data-parallax-about-label]');
      const aboutCopy = document.querySelector<HTMLElement>('[data-parallax-about-copy]');
      const aboutPhoto = document.querySelector<HTMLElement>('[data-parallax-about-photo]');
      const contact = document.querySelector<HTMLElement>('[data-parallax-section="contact"]');
      const contactCopy = document.querySelector<HTMLElement>('[data-parallax-contact-copy]');
      const contactAction = document.querySelector<HTMLElement>('[data-parallax-contact-action]');

      if (hero) {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: hero, start: '45% top', end: 'bottom top', scrub: 0.7 },
        });
        if (heroCopy) timeline.to(heroCopy, { yPercent: -20, opacity: 0.28, ease: 'none' }, 0);
        if (heroOrbOne) timeline.to(heroOrbOne, { yPercent: 22, ease: 'none' }, 0);
        if (heroOrbTwo) timeline.to(heroOrbTwo, { yPercent: -18, ease: 'none' }, 0);
      }

      if (about) {
        const layers = [aboutLabel, aboutCopy, aboutPhoto].filter(Boolean);
        gsap.fromTo(
          layers,
          { y: (index) => [76, 48, 108][index], opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            stagger: 0.03,
            scrollTrigger: { trigger: about, start: 'top 90%', end: 'top 24%', scrub: 0.75 },
          },
        );
      }

      if (contact) {
        const layers = [contactCopy, contactAction].filter(Boolean);
        gsap.fromTo(
          layers,
          { y: (index) => (index === 0 ? 58 : 104), opacity: 0.38 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            stagger: 0.08,
            scrollTrigger: { trigger: contact, start: 'top 88%', end: 'top 32%', scrub: 0.7 },
          },
        );
      }
    });

    ScrollTrigger.refresh();
    return () => {
      context.revert();
      gsap.ticker.remove(animateLenis);
      lenis.destroy();
    };
  }, []);

  return null;
}
