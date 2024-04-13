'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

declare module 'locomotive-scroll' {
  interface InstanceOptions {
    lenisOptions?: {
      duration: number;
    };
  }
}

const SmoothScroll = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (isDesktop) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            duration: 0.425,
          },
        });
      })();
    }
  }, [isDesktop]);

  return <></>;
};

export default SmoothScroll;
