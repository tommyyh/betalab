'use client';

import React from 'react';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';

type PropsType = {
  title: string;
  target: string;
};

const LinkTo = ({ title, target }: PropsType) => {
  const handleScroll = (e: any) => {
    const element = document.getElementById(target);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <li data-cursor="pointer" onClick={handleScroll}>
      {title}
      <SmallArrowRight />
    </li>
  );
};

export default LinkTo;
