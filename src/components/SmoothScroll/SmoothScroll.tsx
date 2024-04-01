'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const SmoothScroll = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (isDesktop) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, [isDesktop]);

  return <></>;
};

export default SmoothScroll;
