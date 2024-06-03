'use client';

import React from 'react';
import ArrowSvg from '@/public/icons/arrow.svg';
import style from './navigation.module.scss';

type PropsType = {
  links: any;
};

type LinkType = {
  target: any;
  title: any;
};

const Navigation = ({ links }: PropsType) => {
  return (
    <ul className={style.links}>
      <div>
        {links.map(
          (link: any, index: number) =>
            index % 2 === 0 && (
              <Link title={link.title} target={link.id} key={index} />
            )
        )}
      </div>

      <div>
        {links.map(
          (link: any, index: number) =>
            index % 2 === 1 && (
              <Link title={link.title} target={link.id} key={index} />
            )
        )}
      </div>
    </ul>
  );
};

const Link = ({ target, title }: LinkType) => {
  const handleScroll = () => {
    const element = document.getElementById(target);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <li className={style.link} onClick={handleScroll} data-cursor="pointer">
      <span>{title}</span> <ArrowSvg />
    </li>
  );
};

export default Navigation;
