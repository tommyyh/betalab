import React from 'react';
import style from './links.module.scss';
import { Link } from '@/navigation';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';

type PropsType = {
  l: any;
  invalidPrefix: boolean;
  fallbackLang: {
    home: string;
    work: string;
    services: string;
    contact: string;
  };
};

const Links = ({ l, invalidPrefix, fallbackLang }: PropsType) => {
  const locale = invalidPrefix ? 'en' : ('' as 'en');
  const title = (word: string) => l(`links.${word}.title`);
  const linkTo = (word: string) => l(`links.${word}.link`);

  // Before rendering, check if prefix is valid -> if not -> load default english values
  return (
    <ul className={style.links}>
      <li data-cursor="pointer">
        <Link locale={locale} href={linkTo('home')}>
          {invalidPrefix ? fallbackLang.home : title('home')}
          <SmallArrowRight />
        </Link>
      </li>
      <li data-cursor="pointer">
        <Link locale={locale} href={linkTo('work')}>
          {invalidPrefix ? fallbackLang.work : title('work')}
          <SmallArrowRight />
        </Link>
      </li>
      <li data-cursor="pointer">
        <Link locale={locale} href={linkTo('services')}>
          {invalidPrefix ? fallbackLang.services : title('services')}
          <SmallArrowRight />
        </Link>
      </li>
      <li data-cursor="pointer">
        <Link locale={locale} href={linkTo('contact')}>
          {invalidPrefix ? fallbackLang.contact : title('contact')}
          <SmallArrowRight />
        </Link>
      </li>
    </ul>
  );
};

export default Links;
