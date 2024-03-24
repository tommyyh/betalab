'use client';

import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/navigation';
import React from 'react';
import style from './not-found.module.scss';

const NotFound = () => {
  const locale = useLocale();
  const linkLocale = !locales.includes(locale as 'en' | 'cz') ? 'en' : locale;

  return (
    <main className={style.notFound}>
      <h1>NotFound</h1>

      <Link locale={linkLocale as 'en' | 'cz'} href={'/'}>
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
