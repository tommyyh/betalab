import React from 'react';
import style from './link.module.scss';
import { Link as NextLink } from '@/navigation';
import ArrowSvg from '@/public/icons/arrow.svg';

type PropsType = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: PropsType) => {
  return (
    <NextLink href={href} className={style.link}>
      <span>{children}</span> <ArrowSvg />
    </NextLink>
  );
};

export default Link;
