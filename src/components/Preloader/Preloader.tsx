'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Loading from './Loading/Loading';
import { usePathname } from 'next/navigation';

type PropsType = {
  text: string;
};

const Preloader = ({ text }: PropsType) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);

      setIsLoading(false);
    }, 500);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && <Loading text={text} />}
    </AnimatePresence>
  );
};

export default Preloader;
