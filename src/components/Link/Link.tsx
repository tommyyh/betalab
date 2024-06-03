import React from 'react';
import style from './link.module.scss';
import { Link as NextLink } from '@/navigation';
import ArrowSvg from '@/public/icons/arrow.svg';

type PropsType = {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
};

const Link = ({ href, children, blank = false }: PropsType) => {
  return (
    <NextLink
      href={href}
      className={style.link}
      target={blank ? '_blank' : '_self'}
    >
      <span>{children}</span> <ArrowSvg />
    </NextLink>
  );
};

export default Link;
