'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import style from './pageTransition.module.scss';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'; // Fast start, slow end
const DURATION = 450;
const LAG = 70; // How far the second panel trails behind
const FALLBACK = 5000; // Reveal anyway if the new page never arrives

const PageTransition = () => {
  const router = useRouter();
  const pathname = usePathname();
  const front = useRef<HTMLDivElement>(null); // Page color, on top
  const back = useRef<HTMLDivElement>(null); // Slightly lighter/darker, underneath
  const covered = useRef(false);
  const fallback = useRef<ReturnType<typeof setTimeout>>();

  // Slide both panels, the second one trailing slightly behind
  const slide = (from: string, to: string, lead: HTMLDivElement, trail: HTMLDivElement) => {
    const keyframes = [{ transform: from }, { transform: to }];
    const options = { duration: DURATION, easing: EASE, fill: 'forwards' as FillMode };

    return Promise.all([
      lead.animate(keyframes, options).finished,
      trail.animate(keyframes, { ...options, delay: LAG }).finished,
    ]);
  };

  const reveal = async () => {
    if (!covered.current || !front.current || !back.current) return;
    covered.current = false;
    clearTimeout(fallback.current);

    await slide('translateY(0%)', 'translateY(100%)', front.current, back.current);

    // Back to the resting position above the screen
    [front.current, back.current].forEach((panel) =>
      panel?.getAnimations().forEach((animation) => animation.cancel())
    );
  };

  // Intercept internal link clicks: cover the screen, then navigate
  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // New tab / window

      const link = (e.target as Element).closest('a');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return; // External
      if (url.pathname === location.pathname) return; // Same page (e.g. #anchor)
      // Language switch remounts the layout (and this component), keep it instant
      if (url.pathname.split('/')[1] !== location.pathname.split('/')[1]) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (covered.current || !front.current || !back.current) return;

      // Stops Next's <Link> from navigating, we do it once the screen is covered
      e.preventDefault();
      covered.current = true;

      await slide('translateY(-100%)', 'translateY(0%)', back.current, front.current);
      router.push(url.pathname + url.search + url.hash);

      fallback.current = setTimeout(reveal, FALLBACK);
    };

    // Capture phase, so it runs before Next's <Link> handler
    window.addEventListener('click', onClick, true);
    return () => window.removeEventListener('click', onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  // New page is in, wash the panels away
  useEffect(() => {
    reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div ref={back} className={`${style.panel} ${style.back}`} aria-hidden="true" />
      <div ref={front} className={`${style.panel} ${style.front}`} aria-hidden="true" />
    </>
  );
};

export default PageTransition;
