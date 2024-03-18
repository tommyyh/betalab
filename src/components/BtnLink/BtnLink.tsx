import React from 'react';
import style from './btnLink.module.scss';
import { Link } from '@/navigation';

type PropsType = {
  href: string;
  title: string;
};

const BtnLink = ({ href, title }: PropsType) => {
  return (
    <Link className={style.btnLink} href={href}>
      {title}
    </Link>
  );
};

export default BtnLink;
