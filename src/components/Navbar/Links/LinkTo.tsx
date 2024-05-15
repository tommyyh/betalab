'use client';

import React, { useContext } from 'react';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';
import { MenuContext } from '../MenuContext/MenuContext';

type PropsType = {
  title: string;
  target: string;
};

const LinkTo = ({ title, target }: PropsType) => {
  const { closeMenu }: any = useContext(MenuContext);

  const handleScroll = () => {
    const element = document.getElementById(target);

    closeMenu();
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
