'use client';

import { Link } from '@/navigation';
import React from 'react';
import style from './langMobile.module.scss';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LangMobile = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/').filter((value, index) => index > 1);
  const locale = useLocale();
  const redirectTo = locale === 'en' ? 'cz' : 'en';

  return (
    <Link href={`/${currentLocale}`} locale={redirectTo} className={style.lang}>
      {redirectTo.toUpperCase()}
    </Link>
  );
};

export default LangMobile;
