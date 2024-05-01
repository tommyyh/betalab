import React from 'react';
import style from './links.module.scss';
import { Link } from '@/navigation';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';
import LinkTo from './LinkTo';

type PropsType = {
  l: any;
  desktop?: boolean;
};

const Links = ({ l, desktop }: PropsType) => {
  const title = (word: string) => l(`links.${word}.title`);
  const linkTo = (word: string) => l(`links.${word}.link`);

  return (
    <ul
      className={desktop ? `${style.links} ${style.linksDesktop}` : style.links}
    >
      <li data-cursor="pointer">
        <Link href={linkTo('home')}>
          {title('home')}
          <SmallArrowRight />
        </Link>
      </li>
      <li data-cursor="pointer">
        <Link href={linkTo('work')}>
          {title('work')}
          <SmallArrowRight />
        </Link>
      </li>
      <LinkTo title={title('services')} target="services" />
      <LinkTo title={title('clients')} target="clients" />
    </ul>
  );
};

export default Links;
