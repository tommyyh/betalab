import React from 'react';
import style from './language.module.scss';
import { Link } from '@/navigation';
import { getLocale } from 'next-intl/server';

type PropsType = {
  l: any;
};

const Language = async ({ l }: PropsType) => {
  const locale = await getLocale();

  return (
    <button className={style.language} aria-label={l('general.lang')}>
      <Link locale={locale === 'en' ? 'en' : 'cz'} href={'/'}>
        {locale === 'en' ? 'English' : 'Čeština'}
      </Link>
      <Link locale={locale === 'en' ? 'cz' : 'en'} href={'/'}>
        {locale === 'en' ? 'Čeština' : 'English'}
      </Link>
    </button>
  );
};

export default Language;
