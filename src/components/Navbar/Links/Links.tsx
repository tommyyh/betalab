import React from 'react';
import style from './links.module.scss';
import { Link } from '@/navigation';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';

type PropsType = {
  l: any;
  desktop?: boolean;
};

const Links = ({ l, desktop }: PropsType) => {
  const title = (word: string) => l(`links.${word}.title`);
  const linkTo = (word: string) => l(`links.${word}.link`);
  const keys = ['home', 'work', 'services', 'contact'];

  return (
    <ul
      className={desktop ? `${style.links} ${style.linksDesktop}` : style.links}
    >
      {keys.map((word, index) => (
        <li data-cursor="pointer" key={index}>
          <Link href={linkTo(word)}>
            {title(word)}
            <SmallArrowRight />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
