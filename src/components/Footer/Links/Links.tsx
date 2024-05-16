import { Link } from '@/navigation';
import React from 'react';
import style from './links.module.scss';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';
import LinkTo from './LinkTo';

const Links = ({ l }: any) => {
  const title = (word: string) => l(`links.${word}.title`);
  const linkTo = (word: string) => l(`links.${word}.link`);

  return (
    <ul className={style.links}>
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
      <li data-cursor="pointer">
        <Link href={linkTo('contact')}>
          {title('contact')}
          <SmallArrowRight />
        </Link>
      </li>
      <li data-cursor="pointer">
        <Link href={linkTo('privacy')}>
          {title('privacy')}
          <SmallArrowRight />
        </Link>
      </li>
    </ul>
  );
};

export default Links;
