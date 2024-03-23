import React from 'react';
import style from './btnLink.module.scss';
import { Link } from '@/navigation';

type PropsType = {
  href: string;
  title: string;
  customClass?: string;
};

const BtnLink = ({ href, title, customClass }: PropsType) => {
  return (
    <Link className={`${style.btnLink} ${customClass}`} href={href}>
      <span>{title}</span>
      <span>{title}</span>
    </Link>
  );
};

export default BtnLink;
